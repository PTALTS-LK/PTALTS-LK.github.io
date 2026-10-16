---
title: RKD
published: 2026-01-12
description: 基于RP2040 + PlatformIO(Arduino)的模块化键盘开发板/音游控制器
image: "./rkd-cover-new.png"
tags: [RKD, RP2040, PlatformIO, Arduino, C++, 单片机]
status: developing
order: 10
---

# RKD
## RP2040-based Keyboard Devkit


## 主要功能

- **自定义串口协议**：基于 CDC，命令覆盖链路测试、按键与 Profile、Runtime 配置、文件读写、EEPROM、使用统计、固件升级等
- **按键与模式**：按键动作映射、Profile 切换与键盘模式管理
- **灯效**：基于 NeoPixel 的 RGB 灯效控制
- **配置持久化**：基于 LittleFS 以及模拟的 EEPROM 来存储各种配置信息
- **EEPROM 参数**：固件版本、设备序列号、OTA 状态等按名读写
- **使用统计**：累计上电时长与各按键次数，按键静默一段时间或定时兜底自动落盘
- **OTA 升级**：接收上位机上传的镜像后触发升级；镜像格式非法时直接返回错误且**不重启**，避免刷坏变砖
- **引导模式**：支持 1200bps 触碰进入 BOOTSEL，配合上位机可免按键刷写
- **健壮性**：崩溃处理与 USB 描述符定制，串口需 DTR 置位才会响应

## 协议约定

固件与上位机 **RCT** 配套使用，协议两侧同步演进（例如分页页号从 8 位扩展到 16 位时，固件与上位机需要一起更新），所以升级固件时通常也要同步更新上位机。

> 仓库暂未公开。
