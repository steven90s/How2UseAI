# ChatGPT

ChatGPT 是 OpenAI 推出的通用 AI 对话助手，可以用于提问、写作、翻译、学习、编程、整理资料和多模态内容理解。新用户可以在网页端注册，也可以通过 iOS / Android 客户端登录后订阅。

这篇文档重点讲两件事：

- 如何注册一个能长期使用的 ChatGPT 账号
- 如何通过网页端或 Apple App Store 订阅，并避免重复扣费、账号混乱和账单问题

::: warning 合规提醒
请使用本人邮箱、本人 Apple Account、真实账单信息和符合服务条款的地区信息。不要使用接码平台、他人手机号、虚拟身份、地址生成器、代注册账号，或以规避地区限制、税费、风控为目的的资料。
:::

## 注册前准备

| 项目 | 建议 |
|------|------|
| 邮箱 | 使用长期可控的邮箱，例如 Gmail、Outlook、自有域名邮箱 |
| 登录方式 | 邮箱密码、Google、Microsoft、Apple 任选一种，之后尽量保持一致 |
| 设备 | 推荐先用电脑浏览器注册，再在手机 App 登录同一账号 |
| 地区 | 确认所在地属于 ChatGPT 支持的国家或地区 |
| 网络 | 使用稳定、可信、合规的网络环境，不要频繁切换代理节点 |
| 支付 | 网页端可用 OpenAI 支持的付款方式；iOS 端走 Apple App Store；Android 端走 Google Play |
| 备份 | 保存好邮箱、登录方式、Apple Account / Google 账号、订阅渠道和购买凭证 |

::: tip 手机号说明
OpenAI 帮助中心目前说明：创建新的 OpenAI 账号或使用 ChatGPT 不再要求手机号验证。不要为了注册 ChatGPT 去购买接码服务。如果 Apple Account 创建或付款流程要求手机号，请使用本人可接收验证码的号码。
:::

## 网络环境与地区限制

OpenAI 帮助中心说明，ChatGPT 目前只支持从官方列表中的国家和地区访问。访问或提供来自不支持国家和地区的 ChatGPT / API 服务，可能导致账号被封禁或暂停；使用不在支持国家和地区列表内的付款方式，也可能导致无法使用服务。

### 先分清四个地区

| 层级 | 看什么 | 影响 |
|------|--------|------|
| 访问地区 | 当前网络出口、IP 所在地、是否被识别为支持地区 | 影响能否打开、登录和使用 ChatGPT |
| 账号地区 | ChatGPT 账号状态、历史登录环境、风控判断 | 影响账号是否稳定 |
| 付款地区 | 银行卡发行地、Apple / Google 商店地区、账单资料 | 影响能否订阅和续费 |
| 设备地区 | iOS / Android 商店、系统网络、App 内购买环境 | 影响 App 下载、订阅弹窗和支付确认 |

不要只看其中一个。例如：网页能打开，不代表付款方式一定可用；Apple Account 是美区，也不代表 ChatGPT 账号在任何网络环境下都稳定；Google 邮箱显示某个地区，也不等于 OpenAI 会按这个地区处理访问和付款。

### 代理 / VPN 的作用和边界

代理或 VPN 只能解决一部分网络连通性问题，不能改变 OpenAI 的服务支持范围，也不能替代真实有效的付款方式和账单信息。

可以考虑使用稳定代理的情况：

- 你本身位于 OpenAI 支持地区，但公司、学校或酒店网络限制了访问
- 你在支持地区旅行，当前网络质量差、DNS 异常或登录页加载不完整
- 你需要让浏览器访问 ChatGPT、登录页和账单页时保持同一个稳定出口

不建议的用法：

- 用免费公共代理、共享代理、来路不明节点登录账号
- 登录、付款、App 订阅时频繁切换国家或节点
- 浏览器走一个地区，手机 App / App Store / Google Play 走另一个地区
- 用代理绕过 OpenAI 不支持地区或不支持付款方式
- 使用多人共用、被滥用严重的数据中心 IP 作为长期账号环境

::: warning 代理不是“地区万能钥匙”
如果实际所在地、付款方式或 App 商店地区不符合 OpenAI / Apple / Google 的要求，代理通常只能让页面短暂打开，不能保证注册、订阅、续费和账号长期稳定。尤其不要在付款、兑换礼品卡、修改账单资料时频繁切换网络出口。
:::

### 推荐网络设置

| 场景 | 建议 |
|------|------|
| 网页端注册 | 使用同一个稳定浏览器和网络环境完成注册、登录、升级，不要中途频繁切换节点 |
| 网页端订阅 | 保持访问地区、付款方式地区、账单信息尽量一致；失败后不要连续重复刷卡 |
| iOS App 订阅 | App Store 登录、Apple Account 地区、礼品卡地区要一致；系统 VPN / 代理不一定等同于 App Store 付款地区 |
| Android App 订阅 | Google Play 账号地区、礼品卡地区、Google Play 余额币种要一致；手机必须能正常使用 Google Play |
| API 使用 | 服务器部署地、账号使用地、付款方式都要确认在支持范围内，不要把 API 服务部署在不支持地区 |

### 常见错误和处理

| 现象 | 可能原因 | 建议 |
|------|----------|------|
| 提示当前地区不支持 | 网络出口被识别为不支持地区，或账号近期在不支持地区访问过 | 确认实际所在地是否在支持列表；如果人在支持地区但误判，先清理浏览器缓存和 Cookie，换浏览器或无痕模式再试 |
| 登录页循环、白屏、验证码加载不出 | 代理只覆盖部分域名、浏览器插件冲突、DNS 或网络拦截 | 换稳定网络；关闭可疑浏览器插件；用无痕窗口测试 |
| 网页能打开但付款失败 | 付款方式不在支持国家或地区，或账单信息与付款方式不匹配 | 换官方支持的付款方式；不要连续重复尝试失败卡 |
| iOS / Android 已扣费但 ChatGPT 权益没出现 | App 内登录的 ChatGPT 账号与订阅时账号不一致，或 Apple / Google 购买状态未同步 | 确认 App 内 ChatGPT 账号、Apple Account / Google 账号一致，再尝试恢复购买 |
| 旅行回来后仍提示不支持地区 | 浏览器缓存、Cookie 或账号状态残留 | 按 OpenAI 官方建议清理缓存和 Cookie，换浏览器或无痕模式；仍不行联系 OpenAI 支持 |

### 关于中国大陆、香港、澳门和台湾

OpenAI 支持地区列表会变化，必须以官方最新页面为准。写这篇文档时，官方列表中能看到 Taiwan，但没有把 China、Hong Kong、Macau 作为独立支持条目列出。

因此要特别注意：

- 中国大陆网络环境下直接访问、注册、订阅可能会遇到地区限制或网络限制
- 香港区 Google 邮箱或大陆手机号，不等于 ChatGPT 账号一定可用或不可用
- 付款方式、App Store / Google Play 地区、实际访问地区比邮箱显示地区更关键
- 如果人在不支持地区，使用代理访问或付款仍可能带来账号风控风险

## 美区手机号获取建议

先判断是否真的需要美区手机号：

- 普通 ChatGPT 注册和使用：目前通常不需要手机号
- OpenAI API：首次创建 API Key 可能仍需要手机号验证
- Apple Account：手机号主要用于验证身份、双重认证和账号恢复
- 美国运营商、Google Play、Apple 付款风控：有时会看手机号、账单信息、地区和付款方式是否一致

如果只是为了 ChatGPT 使用本身，不建议为了“看起来像美区账号”专门购买美区手机号。手机号一旦绑定到 Apple Account、Google 账号或 API 验证，就会变成账号恢复入口，最重要的是长期可控。

### 推荐方式

| 方式 | 适合谁 | 稳定性 | 注意事项 |
|------|--------|--------|----------|
| 美国本地运营商实体 SIM | 已在美国或有人可在美国正规办理 | 高 | 最适合长期账号恢复和收验证码 |
| 美国运营商 eSIM / 预付费 eSIM | 短期赴美、手机支持 eSIM | 中到高 | 很多服务要求人在美国本地购买或激活 |
| 美国 MVNO 低月租号码 | 需要长期保号、能接受月费 | 中到高 | 先确认支持短信、漫游或 Wi-Fi Calling |
| 公司或团队正式号码 | 企业账号、团队统一管理 | 高 | 要明确归属、交接和恢复流程 |

可行做法：

1. **人在美国时办理预付费 SIM / eSIM**：优先选择美国运营商或正规 MVNO，确认号码可以正常收 SMS、接电话，并开通自动续费或长期保号方案。
2. **短期赴美时使用旅行 eSIM**：例如部分美国运营商提供面向游客的 eSIM 套餐，但通常需要在美国境内购买和激活。适合短期收验证码，不一定适合长期账号恢复。
3. **长期保号用低月租方案**：选择有美国真实手机号、可持续续费、能接收短信的预付费或 MVNO 方案。购买前确认是否支持在境外收短信、Wi-Fi Calling、国际漫游和 eSIM 迁移。
4. **企业场景用公司号码**：如果账号属于团队或公司，不要绑个人临时号码。使用公司可控号码，并记录谁能接收验证码、谁负责续费、离职时如何交接。

::: warning 先激活再离开美国
不少美国预付费 eSIM 或 MVNO eSIM 要求首次激活时人在美国、设备连接美国基站或美国网络。不要假设“买到 eSIM 二维码”就等于能在中国大陆或其他地区远程激活。离开美国前，先测试短信、电话、漫游、Wi-Fi Calling 和账号后台登录。
:::

### 谨慎使用

| 方式 | 问题 |
|------|------|
| Google Voice | 适合日常接打电话和普通短信，但很多平台不把它当移动运营商号码。OpenAI 手机验证目前不支持 Google Voice / VoIP |
| Twilio、TextNow、Skype、虚拟运营商号池 | 经常被识别为 VoIP 或虚拟号，可能收不到验证码或被拒 |
| 亲友号码 | 只有在对方长期可靠、明确同意、愿意配合恢复账号时才考虑；否则账号恢复会非常麻烦 |
| 二手美区号码 | 可能被前任用户绑定过平台、银行、社交账号或风控记录，风险不可控 |

### 租用 / 第二号码服务

这类服务介于“正规长期手机号”和“一次性接码平台”之间，适合隐私保护、临时联系、普通短信和低风险测试。它们通常比接码平台更可控，但仍不等同于你本人名下的美国运营商 SIM / eSIM。

| 服务 | 购买方式 | 参考费用 | 使用建议 |
|------|----------|----------|----------|
| [Hushed](https://hushed.com/pricing/) | 下载 Hushed App，进入 `Add Number`，选择国家、地区、号码和套餐后购买；也可在部分地区通过 `app.hushed.com` 网页入口购买 | 官方支持页显示：美国 / 加拿大本地预付费 `30 天 $7.99`、`90 天 $20.99`、`365 天 $55.99`；美国 / 加拿大无限 1 线订阅 `月付 $6.99`、`年付 $66.99`；另有 $2、$5.25、$11.50 等充值包 | 适合短期保留一个第二号码。Hushed 官方说明第三方验证码不保证可用，所以不要把它当作 Apple / Google / OpenAI 重要账号的长期安全号码 |
| [SLYNUMBER](https://slynumber.com/pricing) | 访问官网或在 App Store / Google Play 搜索 `SLYNUMBER`，创建账号，选择 3 个月或年度号码计划 | 官方价格页显示：私有美国移动号码 `3 个月 $14.99`，年度 `$49.99`；出站通话 / 短信积分包从 `$10` 起，1 个积分通常对应 1 条短信、1 条 MMS 或 1 分钟通话 | 适合想要长期第二号码、接收普通短信和电话的人。官方称其提供真实美国移动号码，但具体平台是否接受仍以 Apple / Google / OpenAI 当时验证结果为准 |

付款方式提示：Hushed App 内购买通常通过 App Store / Google Play 结算，部分地区可在 [app.hushed.com](https://app.hushed.com/) 用信用卡或 Bitcoin 购买。SLYNUMBER 可从官网开始，也可通过 App Store / Google Play App 获取。价格以官方页面和最终结账页为准，税费、地区和汇率可能另算。

购买前检查：

- 是否能保留同一个号码至少 3 到 12 个月
- 是否支持接收来自目标平台的 SMS 短信和语音电话
- 是否支持在中国大陆或境外通过 App / 网页查看短信
- 是否能导出账单、管理续费、取消订阅
- 是否有号码过期恢复期，过期后能否拿回同一个号码
- 是否明确说明第三方验证码是否保证可用

::: warning 第二号码不是主账号安全号码
Hushed、SLYNUMBER 这类第二号码服务可以作为临时或中期方案，但不建议绑定到有余额、订阅、团队权限或长期资料的 Apple / Google / OpenAI 主账号。最稳的方案仍然是本人长期可控的真实移动运营商号码。
:::

### 临时备选：接码平台

接码平台只能作为临时、低价值、可丢弃场景的应急方案，不建议用于 ChatGPT、Apple Account、Google 账号、OpenAI API、支付、订阅、团队账号或任何需要长期找回的账号。

可以考虑的前提：

- 只是测试一个不重要流程，后续不需要找回账号
- 不绑定付款方式、礼品卡余额、个人资料或公司资料
- 不把它作为 Apple / Google / OpenAI 账号的长期安全号码
- 已接受账号随时无法登录、无法恢复、无法申诉的风险

主要风险：

- 号码不属于你，后续验证码可能被别人看到
- 同一个号码可能被多人复用，容易触发平台风控
- 很多平台会识别并拒绝一次性号码、VoIP 号码或虚拟号码
- 后续需要再次验证时，你大概率拿不回同一个号码
- 如果账号里有订阅、余额、礼品卡或个人资料，损失很难追回

本文不把具体接码平台作为推荐清单。市面上常见的 [HeroSMS](https://hero-sms.com/cn) 等服务即使短期能收到验证码，也不等于适合绑定重要账号；使用前应自行确认合法性、隐私政策、号码来源、退款规则和平台条款风险。

### 不建议使用

- 共享号码、租号、代收验证码
- 购买来路不明的 Google Voice 号
- 让陌生人代收 Apple / Google / OpenAI 验证码
- 用无法长期续费的临时号码绑定重要账号

这些方式便宜，但最大问题是：号码不属于你，后续无法稳定收验证码，也无法可靠恢复账号。验证码本质上是账号控制权，不要交给陌生人或临时平台。

### 选择前检查

- 这个号码是否是你的，或由你的公司正式管理
- 是否能长期续费，至少保留 12 个月以上
- 是否能接收来自 Apple、Google、OpenAI、银行或支付平台的短信
- 是否支持语音电话，因为有些平台会改用电话验证码
- 是否支持境外收短信、国际漫游或 Wi-Fi Calling
- 是否能更换手机时迁移 eSIM
- 是否有账号后台、账单记录和客服渠道
- 是否避免绑定到多个不相关账号，降低风控和找回冲突

## GPT 订阅方式区别（核心版）

| 方式 | 适合谁 | 核心条件 | 一句话结论 |
|------|--------|----------|------------|
| 方式一：美区银行卡直付 | 有美国发行银行卡和真实账单信息的人 | 注册 ChatGPT 后，在网页端直接填写可用银行卡付款 | 最简单，账单直接归 ChatGPT 管 |
| 方式二：Apple Gift Card | 没有可用银行卡、主要用 iPhone / iPad 的人 | 用 Gmail 注册 ChatGPT 和美区 Apple Account，再用美国区 Apple Gift Card 余额订阅 | 绕到 Apple 订阅体系，后续改套餐和取消都去 Apple |
| 方式三：Google Play Gift Card | 没有可用银行卡、手上有带 Google Play 的 Android 手机 | 用 Gmail 注册 ChatGPT，Google Play 账号地区、礼品卡地区和余额币种一致 | 类似 Apple 礼品卡，但后续订阅管理在 Google Play |
| 方式四：无 Apple / 无 Google Play | 华为手机、鸿蒙系统、没有 Google Play 服务的设备 | 只能尝试网页端订阅，或换一台有 App Store / Google Play 的设备完成订阅 | 如果网页端也没有可用付款方式，暂时没有稳定官方办法 |

**方式一：美区银行卡直付**

1. 打开 [chatgpt.com](https://chatgpt.com/)
2. 用 Gmail、邮箱密码、Apple、Microsoft 任一方式注册或登录
3. 当前 ChatGPT 注册和使用通常不需要手机号
4. 进入 Upgrade / Billing，选择套餐
5. 填写美国发行银行卡和真实账单信息
6. 付款成功后订阅生效

大陆双币卡通常不等同于美区银行卡，网页端可能会付款失败。是否成功以 ChatGPT 付款页实际结果为准。

**方式二：Apple Gift Card 订阅**

1. 注册一个长期可用的 Gmail
2. 用这个 Gmail 注册或登录 ChatGPT
3. 用同一个 Gmail 创建美国区 Apple Account
4. 在 iPhone / iPad 的 App Store 里登录这个 Apple Account
5. 如果通过支付宝购买礼品卡，可将支付宝地区切换到旧金山，在首页下拉找到「热门美国礼卡」图块，进入 PockyShop
6. 在 PockyShop 里选择 `App Store & iTunes USA`，输入 `20` 或能覆盖目标套餐和可能税费的金额，完成付款
7. 复制返回的兑换码
8. 打开 App Store，点击右上角头像，进入「兑换礼品卡或代码」
9. 粘贴礼品码并兑换到 Apple Account 余额
10. 打开 ChatGPT iOS App，确认登录的是目标 ChatGPT 账号，再点击订阅并用 Apple 订阅确认页付款

::: warning App Store 登录位置
如果只是为了 App Store 订阅 ChatGPT，不要在 iPhone「设置」顶部切换整机 Apple Account / iCloud 账号。请只在 App Store 头像入口，或「设置 -> Apple Account -> 媒体与购买项目」里处理购买账号。切换整机 iCloud 账号可能影响照片、备份、查找、通讯录等同步。
:::

::: warning 礼品卡和账单风险
礼品卡必须与 Apple Account 国家或地区匹配。`20` 美元通常对应 Plus 月费的基础金额，但实际是否足够还要看 Apple 确认页显示的价格和税费。支付宝 PockyShop 属于第三方购买渠道，入口名称、位置、汇率、手续费和售后规则可能变化，购买前要核对清楚。账单地址应真实有效，不要使用地址生成器或为了免税州填写不真实地址。
:::

**方式三：Google Play Gift Card 订阅**

1. 用 Gmail 注册或登录 ChatGPT
2. 准备一台能正常打开 Google Play Store 的 Android 手机
3. 确认 Google Play 账号国家或地区、礼品卡地区、余额币种一致
4. 购买对应地区的 Google Play Gift Card
5. 打开 Google Play Store，点击右上角头像
6. 进入 `Payments & subscriptions -> Redeem code`
7. 输入兑换码并确认兑换到正确的 Google 账号
8. 从 Google Play 下载 OpenAI 官方 ChatGPT App
9. 打开 ChatGPT App，登录目标 ChatGPT 账号
10. 在 App 内点击订阅，用 Google Play 订阅确认页付款

Google Play Gift Card 和余额通常只能在购买时对应的国家、地区和币种内使用。部分国家或地区的 Google Play 余额不一定能买订阅，订阅前要以 Google Play 确认页为准。

**方式四：无 Apple / 无 Google Play 的设备**

这类情况常见于没有 Google Play 服务的华为手机、鸿蒙系统设备，或者无法安装官方 Google Play Store 的 Android 设备。

可尝试的官方路径只有三种：

1. 在 [chatgpt.com](https://chatgpt.com/) 网页端直接订阅，但需要网页端可用的付款方式
2. 用另一台 iPhone / iPad 走 Apple App Store 订阅，订阅成功后回到原设备网页登录同一个 ChatGPT 账号使用
3. 用另一台带 Google Play 的 Android 手机走 Google Play 订阅，订阅成功后回到原设备网页登录同一个 ChatGPT 账号使用

如果你没有可用银行卡，也没有可用的 App Store 或 Google Play 订阅环境，暂时没有稳定的官方付款办法。不建议使用第三方代订、共享账号、非官方 APK 或来路不明的充值服务。

### 特殊情况：香港区 Google 邮箱 + 大陆手机号

如果你使用的是「地区显示为香港的 Google / Gmail 账号」，但 Google 账号的恢复手机号或创建账号时验证手机号是中国大陆号码，需要分清三层关系：

| 层级 | 看什么 | 是否直接决定 ChatGPT 可用性 |
|------|--------|------------------------------|
| Google 账号 | 邮箱、Google 账号地区、恢复手机号 | 通常不直接决定。它主要负责 Google 登录和账号找回 |
| OpenAI / ChatGPT 账号 | 登录方式、实际访问地、OpenAI 支持地区、风控状态 | 会影响 |
| 订阅和付款 | 付款方式地区、Apple / Google / 网页端账单渠道 | 会影响 |

结论：

- **如果大陆手机号只是 Google 的恢复手机号或 Google 注册验证码**：通常不会直接影响 ChatGPT 注册。OpenAI 通过 Google 登录拿到的是登录身份，不等于把这个手机号作为 ChatGPT 的地区验证。
- **ChatGPT 新账号创建目前通常不需要手机号验证**：OpenAI 帮助中心说明，创建新的 OpenAI 账号或使用 ChatGPT 不再要求手机号验证。
- **API 平台不同**：如果你要去 `platform.openai.com` 创建第一个 API Key，OpenAI 仍可能要求手机号验证，这和普通 ChatGPT 使用不是一回事。
- **地区支持才是核心**：OpenAI 当前支持地区列表是最终依据；访问或付款方式来自不支持地区，可能导致注册、登录、付款或账号状态出现问题。
- **付款方式要合规**：OpenAI 帮助中心说明，使用不在支持列表内的付款方式可能导致服务受限。不要把 Google 账号标记为某个地区，当成绕过地区或付款限制的方法。

::: warning 当前支持列表要以官方为准
OpenAI 支持地区列表会变化。写这篇文档时，官方列表中可以看到 Taiwan 等地区，但没有把「Hong Kong / China / Macau」作为独立条目列出。实际能否注册、登录和付款，请以 ChatGPT 页面、OpenAI 帮助中心最新列表、付款渠道实际结果为准。
:::

## 推荐路线

| 路线 | 适合人群 | 优点 | 注意事项 |
|------|----------|------|----------|
| 网页端注册 + 网页端订阅 | 多设备使用、希望账单清晰 | 订阅直接在 ChatGPT 管理，最不容易混乱 | 需要可用的网页端付款方式 |
| Google 账号注册 ChatGPT + iOS App Store 订阅 | 主要用 iPhone / iPad，想走 Apple 支付 | 可以用 Apple 订阅体系管理 | 后续取消、退款、改套餐要去 Apple 侧处理 |
| Google 账号注册 ChatGPT + Google Play 订阅 | 主要用 Android，且手机有 Google Play | 可以用 Google Play 订阅体系管理 | 礼品卡地区、Play 国家和余额币种要一致 |
| 无 App Store / Google Play 设备 | 华为、鸿蒙等无 Google Play 设备 | 只能回到网页端或借助另一台官方商店设备 | 没有可用网页付款方式时，暂无稳定官方办法 |
| 免费账号先使用，后续再升级 | 新手试用 | 成本低，先熟悉功能 | 免费计划能力和额度有限，以页面显示为准 |

::: tip 多设备用户优先网页端
如果你会同时在电脑、手机、平板上使用 ChatGPT，优先考虑在 [chatgpt.com](https://chatgpt.com/) 订阅。这样账单和套餐都在 ChatGPT 网页端管理，不容易和 Apple / Google 订阅重复。
:::

## 方式一：网页端注册

### 操作步骤

1. 打开 [ChatGPT 官网](https://chatgpt.com/)
2. 点击注册或登录
3. 选择一种登录方式：
   - 邮箱 + 密码
   - Continue with Google
   - Continue with Microsoft
   - Continue with Apple
4. 按页面提示完成邮箱验证、登录确认或安全检查
5. 登录成功后，进入 ChatGPT 首页
6. 点击左下角头像或个人菜单，进入设置
7. 如需升级，选择 Upgrade 或 Plan / Billing 相关入口

### 登录方式怎么选

| 登录方式 | 建议 |
|----------|------|
| Google | 推荐给已有 Gmail 的用户，登录方便 |
| 邮箱密码 | 适合希望独立管理密码的人 |
| Apple | 适合 Apple 生态用户，注意是否启用隐藏邮箱 |
| Microsoft | 适合使用 Outlook、Office、企业微软账号的人 |

::: warning 登录方式不要混用
如果最初用 Google 注册，之后也建议继续点 Google 登录。OpenAI 帮助中心说明：如果最初用 Google、Microsoft、Apple 等社交登录注册，通常不能再改成邮箱密码登录。忘记这一点很容易导致「我明明有账号但登录进去是空号」。
:::

### 网页端订阅

1. 登录 [chatgpt.com](https://chatgpt.com/)
2. 点击头像或个人菜单
3. 进入 Upgrade your plan、Billing 或 Plan management
4. 选择页面显示的可用套餐
5. 填写付款信息并确认

如果没有看到目标套餐、目标币种或价格，请检查页面底部的国家或地区选择，以及账号当前可用的订阅选项。不同地区、平台和账号状态显示的套餐可能不同。

## 方式二：Google 账号 + Apple App Store 订阅

这种方式适合主要在 iPhone / iPad 上使用 ChatGPT，并希望通过 App Store 余额、礼品卡或 Apple 付款方式订阅的用户。

### 前置准备

- 一个可以长期使用的 Google 账号
- 一个 Apple Account，可以使用 Gmail 作为 Apple Account 邮箱
- 本人可接收验证码的手机号，用于 Apple Account 安全验证
- 与 Apple Account 国家或地区一致的付款方式，或对应地区的 Apple Gift Card
- 已安装官方 ChatGPT iOS App

::: warning 地区和账单信息
Apple Account 的国家或地区、付款方式、礼品卡地区和账单地址需要一致或符合 Apple 要求。账单地址应使用真实地址，不要使用地址生成器，也不要为了选择免税州而填写不真实地址。
:::

### 步骤 1：注册 Google 账号

1. 打开 Google 账号注册页
2. 使用真实姓名或常用身份信息创建账号
3. 绑定备用邮箱或手机号，方便找回
4. 登录 Gmail，确认可以正常收发邮件

这个 Gmail 可以同时作为 ChatGPT 登录邮箱和 Apple Account 邮箱。这样做的好处是容易记，但要分清楚：Google 账号、Apple Account、ChatGPT 账号是三套不同系统。

### 步骤 2：创建 Apple Account

1. 打开 [account.apple.com](https://account.apple.com/)
2. 选择创建 Apple Account
3. 使用 Gmail 作为邮箱
4. 填写姓名、出生日期、国家或地区
5. 设置密码和安全验证方式
6. 输入本人可接收验证码的手机号
7. 完成邮箱和手机号验证

如果你在 iPhone / iPad 上创建，也可以从「设置」或 App Store 登录入口按 Apple 页面提示创建。

### 步骤 3：确认 App Store 购买账号和地区

1. 打开 App Store
2. 点击右上角头像
3. 确认当前登录的是准备用来付款的 Apple Account
4. 如需查看地区，也可以进入「设置 -> Apple Account -> 媒体与购买项目 -> 查看账户」
5. 查看国家或地区
6. 确认该地区支持你准备使用的付款方式或礼品卡

::: warning 不要切换整机 iCloud 账号
为了订阅 ChatGPT，通常只需要让 App Store / 媒体与购买项目使用目标 Apple Account。不要在「设置」顶部把整台设备的 iCloud 账号切换成临时账号，否则可能影响照片、备份、通讯录、查找等同步。
:::

::: tip 不要频繁切换 Apple 地区
Apple 官方说明，切换国家或地区前可能需要花完账户余额、取消订阅并等待订阅期结束。地区不是临时开关，注册前就要想清楚。
:::

### 步骤 4：购买 Apple Gift Card

如果你准备使用 Apple Gift Card：

1. 优先选择 Apple 官方或可信渠道
2. 确认礼品卡国家或地区与 Apple Account 地区一致
3. 确认面额、币种、到账方式和售后规则
4. 保存订单号、兑换码和购买凭证

如果通过支付宝内的 PockyShop 等第三方渠道购买，重点核对：

- 礼品卡是否为目标地区
- 商品名称是否为 `App Store & iTunes USA`
- 面额是否覆盖套餐金额和可能税费，例如 Plus 月费基础金额通常按 `20` 美元准备，但最终以 Apple 确认页为准
- 兑换码是否支持 App Store / Apple Account 余额
- 是否有售后和退款规则
- 汇率、手续费和到账时间

支付宝入口可能随版本和地区调整。常见路径是：将支付宝地区切换到旧金山，在首页下拉找到「热门美国礼卡」图块，进入 PockyShop，选择 `App Store & iTunes USA`，输入金额并付款，复制返回的兑换码后去 App Store 兑换。

::: warning 礼品卡风险
礼品卡通常不能跨区兑换，部分购买可能仍要求账户绑定有效付款方式。第三方渠道存在兑换失败、售后困难或汇率不透明风险。
:::

### 步骤 5：兑换 Apple Gift Card

在 iPhone / iPad 上操作：

1. 打开 App Store
2. 点击右上角头像
3. 选择「兑换礼品卡或代码」
4. 输入兑换码，或用摄像头扫描
5. 点击兑换
6. 返回账户页确认 Apple Account 余额

兑换成功后，金额会进入 Apple Account 余额，可用于 App、应用内购买和订阅等 Apple 支持的消费类型。

### 步骤 6：下载并登录 ChatGPT App

1. 打开 App Store
2. 搜索 ChatGPT
3. 确认开发者为 OpenAI
4. 下载并打开 App
5. 使用前面注册 ChatGPT 时选择的同一种方式登录

::: tip 账号对应关系
App Store 负责付款，ChatGPT 账号负责使用权益。订阅前确认 ChatGPT App 里登录的是你真正要使用的账号。
:::

### 步骤 7：在 iOS App 内订阅

1. 打开 ChatGPT App
2. 点击顶部升级入口，或进入设置中的 Upgrade
3. 查看当前可用套餐
4. 点击订阅
5. 系统会跳转到 Apple 的订阅确认页
6. 核对套餐、价格、周期和 Apple Account
7. 用 Face ID、Touch ID 或 Apple Account 密码确认购买

如果按钮变灰，OpenAI 帮助中心说明可能是 Apple 还在激活应用内购买能力，可能需要等待一段时间后再试。

::: tip Pro 套餐
OpenAI 帮助中心说明，从 Free 升级到 Pro 需要走网页端。iOS App 内实际可订阅的套餐，以 App 内显示为准。
:::

### 步骤 8：补全付款和账单信息

如果 App Store 提示缺少付款方式或账单地址：

1. 打开「设置」
2. 点击 Apple Account 名称
3. 进入「付款与配送」或媒体购买账户信息
4. 补充真实付款方式和账单地址
5. 返回 ChatGPT App 重新订阅

账单地址应与账户地区和付款方式匹配。不要使用虚假地址、地址生成器或免税州规避方案。

## 方式三：Google 账号 + Google Play 订阅

这种方式适合主要用 Android，并且手机可以正常使用 Google Play Store 的用户。它和 Apple Gift Card 路线类似：ChatGPT 账号负责使用权益，Google Play 账号负责付款和订阅管理。

### 前置准备

- 一个可以长期使用的 Gmail / Google 账号
- 一台可以正常打开 Google Play Store 的 Android 手机
- 已安装或可从 Google Play 安装官方 ChatGPT App
- 与 Google Play 账号国家或地区一致的付款方式，或对应地区的 Google Play Gift Card

::: warning Google Play 地区
Google Play 国家或地区、礼品卡地区、余额币种和实际购买页需要匹配。Google 官方说明，Play 礼品卡通常只能在购买时对应的国家、地区和币种内兑换和使用；Play 国家或地区也不是临时开关，切换可能有 90 天限制，并可能影响应用、余额和订阅。
:::

### 步骤 1：确认 Google Play 账号

1. 打开 Google Play Store
2. 点击右上角头像
3. 确认当前登录的是准备用来付款的 Google 账号
4. 进入 `Payments & subscriptions`
5. 查看付款方式、余额和订阅入口是否可用

如果手机没有 Google Play Store，或 Google Play 无法正常登录、下载、付款，就不适合走这条路线。

### 步骤 2：购买 Google Play Gift Card

如果你准备用礼品卡：

1. 优先选择 Google 官方列出的授权渠道或可信渠道
2. 确认礼品卡国家或地区与 Google Play 账号地区一致
3. 确认面额、币种、到账方式和售后规则
4. 保存订单号、兑换码和购买凭证

Google Play 余额能否用于 ChatGPT 订阅，以 Google Play 订阅确认页为准。有些地区的 Play 余额可以买订阅，有些地区只支持应用、图书、电影等内容，购买前要核对。

### 步骤 3：兑换 Google Play Gift Card

1. 打开 Google Play Store
2. 点击右上角头像
3. 进入 `Payments & subscriptions`
4. 选择 `Redeem code`
5. 输入兑换码
6. 核对将要收款的 Google 账号
7. 点击确认兑换

兑换成功后，金额会进入 Google Play balance。不要把兑换码兑到另一个 Google 账号，Google Play 内容和余额通常不能在账号之间转移。

### 步骤 4：下载并登录 ChatGPT App

1. 在 Google Play Store 搜索 ChatGPT
2. 确认开发者为 OpenAI
3. 下载并打开 App
4. 使用前面注册 ChatGPT 时选择的同一种方式登录
5. 确认 App 里登录的是要订阅的 ChatGPT 账号

OpenAI 帮助中心说明，ChatGPT Android App 通过 Google Play Store 提供。不要安装来路不明的非官方 APK。

### 步骤 5：在 Android App 内订阅

1. 打开 ChatGPT App
2. 点击升级入口，或进入设置中的 Upgrade
3. 查看当前可用套餐
4. 点击订阅
5. 系统会打开 Google Play 订阅确认页
6. 核对套餐、价格、周期和 Google 账号
7. 使用 Google Play balance 或其他可用付款方式确认购买

订阅成功后，ChatGPT 权益绑定到当前 App 内登录的 ChatGPT 账号；付款、续费、取消和退款则归 Google Play 管理。

## 方式四：无 Apple / 无 Google Play 的设备

如果你使用的是华为手机、鸿蒙系统设备，或其他没有 Google Play Store / Google Play 服务的 Android 设备，核心问题不是 ChatGPT 账号，而是缺少官方应用商店订阅通道。

可尝试的官方路径：

1. **网页端订阅**：在 [chatgpt.com](https://chatgpt.com/) 登录同一个 ChatGPT 账号，用网页端支持的付款方式升级
2. **借助 iPhone / iPad**：在另一台 iOS 设备上登录你的 ChatGPT 账号，通过 App Store 完成订阅，再回到原设备网页登录同一账号使用
3. **借助带 Google Play 的 Android 手机**：在另一台带 Google Play 的手机上登录你的 ChatGPT 账号，通过 Google Play 完成订阅，再回到原设备网页登录同一账号使用

如果你没有网页端可用付款方式，也没有可用的 App Store 或 Google Play 订阅环境，目前就没有稳定的官方付款办法。第三方代订、共享账号、非官方 APK、来路不明的充值服务都不建议使用，容易造成账号、订阅和售后风险。

## 修改、取消和恢复订阅

### 如果通过网页端订阅

1. 登录 [chatgpt.com](https://chatgpt.com/)
2. 点击个人头像
3. 进入 Settings
4. 打开 Billing 或 Account
5. 选择 Manage plan
6. 按需更改或取消订阅

### 如果通过 iOS App Store 订阅

1. 打开 iPhone / iPad 的「设置」
2. 点击顶部 Apple Account 名称
3. 进入「订阅」
4. 选择 ChatGPT
5. 按需更改套餐或取消订阅

取消后，通常还能使用到当前已付款周期结束。删除 ChatGPT App 或删除 ChatGPT 账号，不等于取消 Apple 订阅。

### 如果通过 Google Play 订阅

1. 打开 Google Play Store
2. 确认登录的是购买 ChatGPT 订阅时使用的 Google 账号
3. 进入 `Payments & subscriptions`
4. 打开 `Subscriptions`
5. 选择 ChatGPT
6. 按需更改套餐或取消订阅

OpenAI 帮助中心说明，通过 Google Play 创建的订阅，需要在 Google Play Store App 或 Google Play 网站中管理。卸载 ChatGPT App 不等于取消 Google Play 订阅。

### 如果订阅后权益没有出现

1. 确认 ChatGPT App 登录的是购买时的 ChatGPT 账号
2. 如果走 Apple，确认 App Store 登录的是购买时使用的 Apple Account
3. 如果走 Google Play，确认 Google Play 登录的是购买时使用的 Google 账号
4. 在 ChatGPT App 设置里查找 Restore purchase 或恢复购买入口
5. 仍未恢复时，联系 OpenAI、Apple 或 Google Play 支持，并准备好购买凭证

## 避免重复扣费

ChatGPT 的订阅渠道是分开的：

| 购买渠道 | 订阅管理位置 |
|----------|--------------|
| chatgpt.com | ChatGPT 网页端 Billing / Manage plan |
| iOS App Store | iPhone / iPad 设置里的 Apple 订阅 |
| Google Play | Google Play 的订阅管理 |

如果你想从 Apple 订阅切换到网页端订阅，先在 Apple 侧取消 ChatGPT 订阅，等确认不会续费后，再去网页端订阅。不要在旧订阅还没取消时马上开新订阅。

## 常见问题

### 注册 ChatGPT 一定要手机号吗？

目前 OpenAI 帮助中心说明，创建新的 OpenAI 账号或使用 ChatGPT 不再要求手机号验证。API 平台首次创建 API Key 可能仍需要手机号验证。

### 一定要准备美区手机号吗？

不一定。普通 ChatGPT 注册和使用通常不需要手机号；Apple Account 也更看重你是否能长期访问这个号码，而不是号码看起来属于哪个地区。如果网页端、Apple 或 Google Play 流程没有要求美区手机号，不要额外购买临时号码。

如果确实需要美国号码，优先用本人或公司长期可控的美国移动运营商号码。OpenAI 帮助中心明确说明，手机号验证目前不支持座机、VoIP、Google Voice 或高级收费号码。

### 代理能解决 ChatGPT 地区限制吗？

不能把地区限制本身“解决掉”。代理或 VPN 只能改善网络连通性，不能改变 OpenAI 是否支持某个国家或地区，也不能让不支持地区的付款方式变成可用付款方式。OpenAI 帮助中心说明，从不支持地区访问或提供 ChatGPT / API 服务，可能导致账号被封禁或暂停。

如果你人在支持地区但被误判，可以先清理浏览器缓存和 Cookie，换浏览器或无痕模式再试；仍不行再联系 OpenAI 支持。

### 香港区 Google 邮箱绑定大陆手机号，会影响 GPT 账号吗？

一般要分情况看：

- 如果大陆手机号只是 Google 账号的恢复手机号、验证手机号或安全手机号，通常不会直接影响 ChatGPT 网页端注册和登录。
- 如果 OpenAI 或 API 平台单独要求手机号验证，就以 OpenAI 页面当时显示的国家/地区和号码要求为准。
- 如果你实际访问地或付款方式不在 OpenAI 支持地区列表内，可能会影响注册、登录、付款或账号状态。
- 如果用 Google 登录注册 ChatGPT，之后继续使用同一个 Google 登录方式，不要改用邮箱密码或其他社交登录方式。

简单说：**Google 邮箱地区和 Google 恢复手机号不是最关键因素；OpenAI 支持地区、实际访问地、付款方式和登录方式一致性更关键。**

### 用 Google 注册后可以改成邮箱密码登录吗？

通常不可以。OpenAI 帮助中心说明，如果最初使用 Google、Microsoft、Apple 等社交登录注册，之后一般不能切换为邮箱密码登录。继续使用原来的社交登录方式最稳。

### Apple Gift Card 兑换失败怎么办？

- 确认礼品卡地区和 Apple Account 地区一致
- 确认兑换码没有输错
- 确认卡已激活且未被使用
- 尝试手动输入兑换码
- 保存购买凭证，联系购买渠道或 Apple 支持

### Google Play Gift Card 兑换失败怎么办？

- 确认礼品卡地区、Google Play 账号国家或地区、当前商店币种一致
- 确认兑换码没有输错，也没有兑到另一个 Google 账号
- 确认礼品卡来自授权或可信渠道，并已激活
- 如果提示地区不匹配，不要继续购买同类卡，先核对 Google Play 国家或地区
- 保存购买凭证，联系购买渠道或 Google Play 支持

### App Store 提示账单地址怎么办？

去 Apple Account 的付款与配送信息中补充真实账单地址。不要使用虚拟地址或地址生成器。

### 找不到订阅入口怎么办？

- 确认下载的是 OpenAI 官方 ChatGPT App
- 确认 App 已更新到最新版本
- 确认登录的是要订阅的 ChatGPT 账号
- iOS / Android 端没有目标套餐时，去 [chatgpt.com](https://chatgpt.com/) 查看网页端可用套餐

### 华为手机、鸿蒙系统没有 Google Play，怎么订阅？

优先尝试网页端订阅。如果网页端没有可用付款方式，就只能借助另一台有 App Store 或 Google Play 的设备完成官方订阅，再回到原设备网页登录同一个 ChatGPT 账号使用。两条路都没有时，暂时没有稳定官方办法。

### 被重复扣费怎么办？

先确认每个平台是否有活跃订阅：

- iOS：设置 -> Apple Account -> 订阅 -> ChatGPT
- Android：Google Play -> 订阅 -> ChatGPT
- 网页端：ChatGPT -> Settings -> Billing / Manage plan

确认后保留一个要继续使用的订阅，其他渠道按原购买平台取消。退款也要按购买渠道申请：Apple 购买找 Apple，Google Play 购买找 Google，网页端购买找 OpenAI。

## 检查清单

订阅前确认：

- [ ] 已确认 ChatGPT 支持当前所在国家或地区
- [ ] 已确认网络出口稳定，不在注册、付款、订阅过程中频繁切换地区
- [ ] 已确认付款方式、账单资料、Apple / Google 商店地区与订阅方式匹配
- [ ] 已确认使用哪一种 ChatGPT 登录方式
- [ ] 已保存登录邮箱和恢复方式
- [ ] 如绑定手机号，已确认号码长期可控、能收短信和电话
- [ ] iOS 订阅前已确认 App Store 登录的 Apple Account
- [ ] Android 订阅前已确认 Google Play 登录的 Google 账号
- [ ] 礼品卡地区与 Apple Account / Google Play 账号地区一致
- [ ] 账单地址和付款方式真实有效
- [ ] 旧订阅已取消，避免重复扣费

## 相关链接

- [ChatGPT 官网](https://chatgpt.com/)
- [ChatGPT 支持国家和地区](https://help.openai.com/en/articles/7947663-chatgpt-supported-countries)
- [ChatGPT 与 API 在不支持地区的说明](https://help.openai.com/en/articles/9131992-chatgpt-and-api-services-in-unsupported-countries-and-territories)
- [旅行后无法访问 ChatGPT / API 的说明](https://help.openai.com/en/articles/9022015-i-m-travelling-to-a-different-country-and-i-can-t-access-chatgpt-or-the-api)
- [OpenAI 手机号验证说明](https://help.openai.com/en/articles/8983040-what-does-phone-verification-look-like)
- [OpenAI 关于座机、VoIP、Google Voice 的手机号验证说明](https://help.openai.com/en/articles/8983024-can-i-use-a-premium-number-landline-google-voice-or-other-voip-phone-number)
- [OpenAI 登录方式说明](https://help.openai.com/en/articles/4936824)
- [ChatGPT iOS App 订阅说明](https://help.openai.com/en/articles/7905739-chatgpt-ios-app-upgrading-to-the-plus-or-pro-plan)
- [ChatGPT Android App 说明](https://help.openai.com/en/articles/7920239)
- [ChatGPT Android 订阅取消说明](https://help.openai.com/en/articles/8258076-how-to-cancel-a-subscription-in-the-chatgpt-android-app)
- [避免多平台重复订阅](https://help.openai.com/en/articles/20001043-how-do-i-avoid-being-charged-twice-if-i-subscribe-to-chatgpt-on-ios-android-and-the-web)
- [取消 ChatGPT 订阅](https://help.openai.com/en/articles/7232927-how-do-i-cancel)
- [Google 账号恢复手机号说明](https://support.google.com/accounts/answer/183723)
- [Google 账号手机号验证说明](https://support.google.com/accounts/answer/114129)
- [创建 Apple Account](https://support.apple.com/en-us/108647)
- [Apple 受信任电话号码说明](https://support.apple.com/en-la/122621)
- [Apple Account 地区切换说明](https://support.apple.com/en-euro/118283)
- [Apple Gift Card 兑换说明](https://support.apple.com/en-us/118242)
- [Apple Gift Card 无法兑换](https://support.apple.com/en-ie/108285)
- [Google Play Gift Card 说明](https://support.google.com/googleplay/answer/3422734)
- [Google Play Gift Card 兑换说明](https://support.google.com/googleplay/answer/15710842)
- [Google Play 余额可购买内容](https://support.google.com/googleplay/answer/6080850)
- [Google Play 国家或地区切换说明](https://support.google.com/googleplay/answer/7431675)
- [T-Mobile Prepaid U.S. Pass eSIM](https://prepaid.t-mobile.com/prepaid-plans/esim-usa-travel-plans)
- [Tello eSIM 境外激活说明](https://tello.com/help_center/activate-port-in/can-i-activate-my-esim-outside-the-us)
- [Hushed 价格说明](https://support.hushed.com/hc/en-us/articles/360015503052-Pricing-Packages-What-type-of-plans-are-offered-on-Hushed)
- [Hushed 购买号码说明](https://support.hushed.com/hc/en-us/articles/360015705691-Buying-Numbers-How-do-I-purchase-a-phone-number-on-Hushed)
- [Hushed 第三方验证码说明](https://support.hushed.com/hc/en-us/articles/360015707631-Verification-Codes-How-do-I-receive-verification-codes-or-2FA-from-third-party-services-e-g-WhatsApp-Uber-etc)
- [SLYNUMBER 价格说明](https://slynumber.com/pricing)
- [HeroSMS](https://hero-sms.com/cn)
