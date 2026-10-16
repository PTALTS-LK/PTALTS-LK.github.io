---
title: RCT —— RKD 配置上位机
published: 2026-08-24
description: 为 RKD 打造的跨平台配置工具，负责按键映射、参数调整、固件升级与设备状态读取。
image: "./rct-cover-new.png"
tags: [RKD, Flutter, 上位机]
status: developing
order: 20
---

**RCT**（RKD Configuration Tool）是给 **RKD** 写的配套上位机，使用 **Flutter** 开发，同时支持 Linux 桌面、MacOS、Windows 与 Android。

## 主要功能

- **设备连接**：自动枚举串口（`/dev/ttyACM*`、COM）与 Android USB Host 设备；设备掉线后自动重连，重插导致端口号变化也能认回来
- **按键配置**：每个按键的动作类型、参数与延迟可视化编辑，支持显式写入序列长度以缩短序列
- **Profile 管理**：设备端 4 套 Profile 的读取、修改与保存
- **Runtime 配置**：运行期参数在线调整
- **使用统计**：累计上电时长与各按键按下次数，并区分「累计」与「本次上电」增量
- **设备信息 / EEPROM**：固件版本、设备序列号等按名读取
- **固件升级**：自定义串口协议 OTA，以及 **BOOTSEL 引导模式直写** （安卓下也支持PICO VENDOR 协议直写烧录）
- **界面**：桌面端无边框自绘窗口 + 托盘图标，Android 端 Material 导航，窄屏有专门适配

## 技术要点

- 自研帧协议解析层；上位机侧做单请求串行排队，避免设备端被流水线打断
- 桌面端串口走 `flutter_libserialport`、USB 直写走 `libusb`；Android 端为自研 Kotlin 平台通道（USB Host API + `UsbDeviceConnection`），不依赖第三方串口插件

> 源码与固件配套使用，仓库暂未公开。代码以 GPL-3.0-or-later 授权，图标与美术资源为 CC BY-NC-SA 4.0。
