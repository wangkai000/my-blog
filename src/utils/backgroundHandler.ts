import { defaultImageUrl } from '~/config'

/** 背景配置类型定义 */
interface BackgroundConfig {
  imageUrl: string
  size?: string
  position?: string
  attachment?: string
  repeat?: string
  opacity?: number
}

/** 默认兜底配置 */
const DEFAULT_CONFIG: BackgroundConfig = {
  imageUrl: defaultImageUrl,
  size: 'cover',
  position: 'center',
  attachment: 'fixed',
  repeat: 'no-repeat',
  opacity: 1,
}

/** 本地存储键名 */
const STORAGE_KEY = 'app_background_config'

/** 从本地存储读取配置 */
function getStoredConfig(): BackgroundConfig | null {
  try {
    // 关键修改：检查是否在浏览器环境
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    }
    return null // 服务器环境返回 null
  }
  catch (error) {
    console.warn('读取背景配置失败，使用默认配置', error)
    return null
  }
}
/** 保存配置到本地存储 */
function saveConfigToStorage(config: BackgroundConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
  }
  catch (error) {
    console.warn('保存背景配置失败', error)
  }
}

/**
 * 尝试加载图片并在成功/失败时执行回调
 */
function tryLoadImage(url: string, onSuccess: () => void, onError: () => void) {
  const img = new Image()
  img.onload = onSuccess
  img.onerror = onError
  img.src = url
}

/** 应用背景样式到HTML根元素 */
function applyStyle(config: BackgroundConfig) {
  // 关键改进：检查是否在浏览器环境
  if (typeof document === 'undefined') {
	  return // 服务器环境直接返回，不执行DOM操作
  }

  const { imageUrl, size, position, attachment, repeat, opacity } = config
  const htmlElement = document.documentElement // 获取HTML根元素

  // 设置除图片外的其他样式
  htmlElement.style.backgroundSize = size || DEFAULT_CONFIG.size || ''
  htmlElement.style.backgroundPosition = position || DEFAULT_CONFIG.position || ''
  htmlElement.style.backgroundAttachment = attachment || DEFAULT_CONFIG.attachment || ''
  htmlElement.style.backgroundRepeat = repeat || DEFAULT_CONFIG.repeat || ''

  // 为了确保背景覆盖整个页面，添加以下样式
  htmlElement.style.minHeight = '100%'
  htmlElement.style.margin = '0'
  htmlElement.style.padding = '0'

  // 应用不透明度（使用叠加层实现，避免影响内容）
  removeOldOverlay()

  if (opacity !== undefined && opacity < 1) {
	  createOpacityOverlay(opacity)
  }

  htmlElement.style.transition = 'background-image 0.3s ease'

  // 尝试加载图片
  tryLoadImage(
	  imageUrl,
	  // 图片加载成功
	  () => {
      htmlElement.style.backgroundImage = `url("${imageUrl}")`
	  },
	  // 图片加载失败
	  () => {
      console.warn('背景图片加载失败，使用默认图片:', imageUrl)
      // 使用默认图片
      htmlElement.style.backgroundImage = `url("${DEFAULT_CONFIG.imageUrl}")`
      // 如果当前使用的不是默认配置，则更新配置
      if (config.imageUrl !== DEFAULT_CONFIG.imageUrl) {
		  const newConfig = {
          ...config,
          imageUrl: DEFAULT_CONFIG.imageUrl,
		  }
		  saveConfigToStorage(newConfig)
      }
	  },
  )
}

/** 移除旧的叠加层 */
function removeOldOverlay() {
  if (typeof document === 'undefined')
    return

  const oldOverlay = document.getElementById('background-overlay')
  if (oldOverlay) {
	  try {
      oldOverlay.remove()
	  }
    catch (error) {
      console.warn('移除旧叠加层失败:', error)
	  }
  }
}

/** 创建不透明度叠加层 */
function createOpacityOverlay(opacity: number) {
  if (typeof document === 'undefined')
    return

  try {
	  const overlay = document.createElement('div')
	  overlay.id = 'background-overlay'
	  overlay.style.position = 'fixed'
	  overlay.style.top = '0'
	  overlay.style.left = '0'
	  overlay.style.width = '100%'
	  overlay.style.height = '100%'
	  overlay.style.backgroundColor = `rgba(255, 255, 255, ${1 - opacity})`
	  overlay.style.pointerEvents = 'none' // 允许点击穿透叠加层
	  overlay.style.zIndex = '-1' // 放在背景后面

	  // 添加到HTML元素内的最前面
	  const htmlElement = document.documentElement
	  htmlElement.insertBefore(overlay, htmlElement.firstChild)
  }
  catch (error) {
	  console.warn('创建叠加层失败:', error)
  }
}

/**
 * 背景处理主函数
 * 初始化时自动应用本地存储配置（无则用默认）
 */
function bodyBackgroundHandler() {
  // 初始化时自动应用配置
  const initConfig = getStoredConfig() || DEFAULT_CONFIG
  applyStyle(initConfig)

  return {
    /** 设置新背景（自动保存到本地存储） */
    set: (customConfig: Partial<BackgroundConfig>) => {
      const newConfig = { ...DEFAULT_CONFIG, ...customConfig }
      saveConfigToStorage(newConfig)
      applyStyle(newConfig)
    },

    /** 重置为默认配置（覆盖本地存储） */
    reset: () => {
      saveConfigToStorage(DEFAULT_CONFIG)
      applyStyle(DEFAULT_CONFIG)
    },

    /** 清除背景（同时清空本地存储） */
    clear: () => {
      const htmlElement = document.documentElement
      htmlElement.style.backgroundImage = ''
      htmlElement.style.backgroundSize = ''
      htmlElement.style.backgroundPosition = ''
      htmlElement.style.backgroundAttachment = ''
      htmlElement.style.backgroundRepeat = ''
      htmlElement.style.minHeight = ''
      htmlElement.style.margin = ''
      htmlElement.style.padding = ''

      // 移除叠加层
      const overlay = document.getElementById('background-overlay')
      if (overlay)
        overlay.remove()

      localStorage.removeItem(STORAGE_KEY)
    },

    /** 获取当前生效的配置 */
    getCurrentConfig: (): BackgroundConfig => {
      return getStoredConfig() || DEFAULT_CONFIG
    },
  }
}

// 初始化并导出工具函数
export const backgroundTool = bodyBackgroundHandler()

// 壁纸配置类型定义
interface Wallpaper {
  url: string
  description: string // 仅保留文案内容
}

interface DailyWallpapers {
  morning: Wallpaper
  afternoon: Wallpaper
  evening: Wallpaper
  lateNight: Wallpaper // 凌晨时段：晚安、催睡风格
}

/**
 * 根据当前时间获取对应的壁纸配置
 * @returns {Wallpaper} 包含壁纸URL和对应文案的对象
 */
export function getCurrentWallpaper(): Wallpaper {
  const morningImg = defaultImageUrl
  const afternoonImg = morningImg
  const eveningImg
        = 'https://s3.bmp.ovh/imgs/2025/07/19/75fb9857e4cf845c.jpg'
  const lateNight = 'https://s3.bmp.ovh/imgs/2025/07/19/f02ee661432b59ec.jpg'

  const wallpaperSchedule: DailyWallpapers[] = [
    // 周一
    {
      morning: {
        url: morningImg,
        description: '今天也是充满希望的一天，阳光正在为你铺好前路',
      },
      afternoon: {
        url: afternoonImg,
        description: '午后的风很轻，专注眼前事，节奏慢一点也没关系',
      },
      evening: {
        url: eveningImg,
        description: '星星都出来站岗了，今天的你也辛苦啦',
      },
      lateNight: {
        url: lateNight,
        description: '夜深了，灯光都在等你睡呢',
      },
    },
    // 周二
    {
      morning: {
        url: morningImg,
        description: '今天也是充满希望的一天，今天的你比昨天更从容',
      },
      afternoon: {
        url: afternoonImg,
        description: '阳光刚好，适合伸个懒腰再继续',
      },
      evening: {
        url: eveningImg,
        description: '万家灯火里，总有一盏是为你亮的',
      },
      lateNight: {
        url: lateNight,
        description: '星星都打哈欠了，晚安呀',
      },
    },
    // 周三
    {
      morning: {
        url: morningImg,
        description: '一周过半，给自己加颗糖，今天也甜甜的',
      },
      afternoon: {
        url: afternoonImg,
        description: '海风会带走疲惫，剩下的交给时间就好',
      },
      evening: {
        url: eveningImg,
        description: '夜色温柔，适合放下手机发会儿呆',
      },
      lateNight: {
        url: lateNight,
        description: '快睡吧，梦里有好风景',
      },
    },
    // 周四
    {
      morning: {
        url: morningImg,
        description: '海浪拍醒晨光，今天也是值得期待的一天',
      },
      afternoon: {
        url: afternoonImg,
        description: '水流不停，但也会绕开石头，你也可以慢慢来',
      },
      evening: {
        url: eveningImg,
        description: '雪山在夜色里打盹，你也该歇歇啦',
      },
      lateNight: {
        url: lateNight,
        description: '沙漠的夜很静，适合好好做梦，明天再努力也不迟',
      },
    },
    // 周五
    {
      morning: {
        url: morningImg,
        description: '闻到周末的味道了吗？今天的风都是甜的',
      },
      afternoon: {
        url: afternoonImg,
        description: '脚步可以放慢啦，周末就在转角',
      },
      evening: {
        url: eveningImg,
        description: '终于可以卸下疲惫，好好享受夜晚啦',
      },
      lateNight: {
        url: lateNight,
        description: '夜再美也不如你的梦，晚安，好好休息呀',
      },
    },
    // 周六
    {
      morning: {
        url: morningImg,
        description: '不用设闹钟的早晨，阳光会轻轻叫醒你',
      },
      afternoon: {
        url: afternoonImg,
        description: '周末就该浪费在美好的事物上呀',
      },
      evening: {
        url: eveningImg,
        description: '星空和周末很配，记得多看看星星呀',
      },
      lateNight: {
        url: lateNight,
        description: '周末的觉要睡够呀，星星会替你看好夜色的，晚安',
      },
    },
    // 周日
    {
      morning: {
        url: morningImg,
        description: '阳光正好，适合赖床，也适合出门走走',
      },
      afternoon: {
        url: afternoonImg,
        description: '给生活充充电，明天又是元气满满的一周',
      },
      evening: {
        url: eveningImg,
        description: '日落温柔，适合整理心情，和本周好好告别',
      },
      lateNight: {
        url: lateNight,
        description: '森林都睡了，你也闭上眼睛吧，晚安，好梦',
      },
    },
  ]

  const now = new Date()
  const dayIndex = now.getDay()
  const hour = now.getHours()
  const adjustedDayIndex = dayIndex === 0 ? 6 : dayIndex - 1

  let timePeriod: keyof DailyWallpapers
  if (hour >= 5 && hour < 12) {
    timePeriod = 'morning'
  }
  else if (hour >= 12 && hour < 18) {
    timePeriod = 'afternoon'
  }
  else if (hour >= 18 && hour < 24) {
    timePeriod = 'evening'
  }
  else {
    timePeriod = 'lateNight'
  }

  return wallpaperSchedule[adjustedDayIndex][timePeriod]
}
