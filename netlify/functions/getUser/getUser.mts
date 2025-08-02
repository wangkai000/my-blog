import type { Config } from "@netlify/functions";
import type { Request } from "node-fetch"; // 确保类型支持

// 普通接口函数，接收HTTP请求并返回响应
export default async (req: Request) => {
    try {
        // 1. 获取请求参数（支持GET查询参数和POST请求体）
        let data;
        const method = req.method;

        if (method === "GET") {
            // 处理GET请求：从URL查询参数获取数据
            const url = new URL(req.url);
            data = Object.fromEntries(url.searchParams);
        } else if (method === "POST") {
            // 处理POST请求：从请求体获取JSON数据
            data = await req.json();
        } else {
            // 不支持的请求方法
            return new Response(
                JSON.stringify({
                    status: "error",
                    message: `不支持的请求方法: ${method}`,
                }),
                {
                    status: 405,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        // 2. 业务逻辑处理（这里可以写你的自定义逻辑）
        const result = {
            message: "这是一个普通接口的响应",
            receivedData: data, // 返回收到的参数
            timestamp: new Date().toISOString(),
            method, // 显示请求方法
        };

        // 3. 返回成功响应
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // 允许跨域请求
            },
        });
    } catch (error) {
        // 错误处理
        return new Response(
            JSON.stringify({
                status: "error",
                message: error instanceof Error ? error.message : "未知错误",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
};

// 配置对象：移除定时配置，保留必要设置（可选）
export const config: Config = {
    // 不需要schedule字段，即为普通接口
    // 可以配置内存限制、超时时间等（可选）
    memory: 128, // 内存限制（MB）
    timeout: 10, // 超时时间（秒）
};
