<script setup>
// 服务器数据数组（新增manufacturer字段存储厂商信息）
const serverList = [
    {
        manufacturer: "襄阳云数据中心", // 厂商标题
        name: "襄阳云电脑-1H1G",
        tag: "新品",
        stock: 4,
        price: 39.0,
        priceUnit: "一次性",
        advantageTag: "入门首选",
        company: "余宽云IDC",
        specs: [
            { name: "CPU", value: "1核 E5-2697 V2" },
            { name: "内存", value: "1G DDR3" },
            { name: "硬盘", value: "30G U.2固态" },
            { name: "带宽", value: "出5Mbps / 入50Mbps" },
            { name: "转发", value: "20个NAT转发" },
            { name: "系统", value: "Linux/Windows" },
            { name: "防护", value: "200Gbps DDoS清洗" },
        ],
        link: "https://idc.yk520.top/aff/IFUZAQPU",
    },
    {
        manufacturer: "襄阳云数据中心", // 厂商标题
        name: "襄阳云电脑-2H2G",
        tag: "新品",
        stock: 3,
        price: 65.0,
        priceUnit: "一次性",
        advantageTag: "高性价比",
        company: "余宽云IDC",
        specs: [
            { name: "CPU", value: "2核 E5-2697 V2" },
            { name: "内存", value: "2G DDR3" },
            { name: "硬盘", value: "30G U.2固态" },
            { name: "带宽", value: "出10Mbps / 入50Mbps" },
            { name: "转发", value: "20个NAT转发" },
            { name: "系统", value: "Linux/Windows" },
            { name: "防护", value: "200Gbps DDoS清洗" },
        ],
        link: "https://idc.yk520.top/aff/IFUZAQPU",
    },
    {
        manufacturer: "香港精品网络", // 厂商标题
        name: "香港100M精品网",
        tag: "4H4G",
        stock: 4,
        price: 741.6,
        priceUnit: "一次性",
        advantageTag: "精品路线",
        company: "余宽云IDC",
        specs: [
            { name: "CPU", value: "Intel Xeon E5-2697 V4" },
            { name: "内存", value: "4G" },
            { name: "硬盘", value: "60G + 赠送52G" },
            { name: "IPV4", value: "1个 5Gbps防御" },
            { name: "带宽", value: "100Mbps" },
            { name: "流量", value: "每月2000G" },
            { name: "路线", value: "三网精品回国" },
        ],
        link: "https://idc.yk520.top/aff/IFUZAQPU",
    },
];
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 页面标题 -->
        <header class="bg-white border-b py-6">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-2xl font-bold text-gray-800">
                    永久机/便宜高性价比的云电脑云服务器推荐 🖥️
                </h1>
                <p class="text-gray-600 mt-2">
                    精选高性价比机型，一次性付费永久使用
                </p>
            </div>
        </header>

        <!-- 服务器列表（数组遍历生成） -->
        <main class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(server, index) in serverList"
                    :key="index"
                    class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                    <!-- 厂商标题栏 -->
                    <div class="bg-blue-600 px-5 py-2">
                        <h2 class="font-bold text-white text-center text-lg">
                            {{ server.company }}
                            <span class="text-sm opacity-80"
                                >({{ server.manufacturer }})</span
                            >
                        </h2>
                    </div>

                    <!-- 服务器标题栏 -->
                    <div class="bg-gray-50 px-5 py-4 border-b">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800">
                                {{ server.name }} {{ server.tag }}
                            </h3>
                            <span
                                class="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                            >
                                库存: {{ server.stock }}
                            </span>
                        </div>
                    </div>

                    <!-- 配置信息 -->
                    <div class="p-5">
                        <ul class="space-y-2 text-gray-600 text-sm mb-4">
                            <li
                                v-for="(spec, i) in server.specs"
                                :key="i"
                                class="flex items-start"
                            >
                                <span class="text-gray-500 w-24"
                                    >• {{ spec.name }}:</span
                                >
                                <span>{{ spec.value }}</span>
                            </li>
                        </ul>

                        <!-- 价格和购买按钮 -->
                        <div class="mt-6 pt-4 border-t">
                            <div class="flex justify-between items-center mb-4">
                                <div>
                                    <span
                                        class="text-2xl font-bold text-gray-900"
                                        >¥{{ server.price }}</span
                                    >
                                    <span class="text-gray-500 ml-1">{{
                                        server.priceUnit
                                    }}</span>
                                </div>
                                <span
                                    class="text-green-600 text-sm font-medium"
                                >
                                    {{ server.advantageTag }}
                                </span>
                            </div>

                            <a
                                :href="server.link"
                                target="_blank"
                                class="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors font-medium"
                            >
                                详情
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- 页脚 -->
        <footer class="bg-gray-100 border-t py-4 mt-10">
            <div
                class="container mx-auto px-4 text-center text-gray-500 text-sm"
            >
                <p>云服务器推广 🎉</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
