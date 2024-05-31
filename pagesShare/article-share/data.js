export const  article = [
	`
# 2021腾讯CSIG第一次面试
>  - 1、首先就是自我介绍
>  - 2、 校园经历
>  - 3、假如我是一个新生，我该这么学习
 
### 面试问题： 
- 1、当页面应用和多页面应用区别
- 2、 vue如何实现单页面应用
- 3、vue为什么首屏加载慢
- 4、如何优化vue首屏加载慢，有哪些方法
- 5、聊一聊网络安全、网络攻击，你知道的网络攻击有哪些，你使用过的网络安全有哪些。
- 6、浏览器输入url回车发生什么、页面如何加载、如何渲染。
- 7、缓存有哪些类型、如何区分、状态码、如何实现，强缓存、协商缓存
- 8、页面如何加载，如何缓存
- 9、高并发
- 10、快速排序如何实现
- 11、分治算法
- 12、TCP连接、三次握手过程，为什么三次、DNS解析
- 13、https和http区别
- 14、BFC、BFC是什么 ，如何开启BFC、
- 15、页面如何隐藏元素，有哪些方法
- 16、vue的 \`v-if\` 和 \` v-show \` 有什么区别
- 17 、假如叫你写一个后台管理系统，有一个按钮 是 管理员可以操作 普通用户用户不能操作、你会使用\`v-if \`还是\`v-show\` 为什么？ 可以从他们的区别出发
- 18、使用\`const\`修饰、如何使对象的属性不能修改。如何实现、哪个属性
- 19、使用过那些 \`ES6\`属性、聊一聊。
- 20、项目中 哪里使用\`vuex \`为什么使用\`vuex\`不使用父子组件信息传递，原因是什么。
- 21、vue-router有哪几种类型，vue-roouter 的机制，如何实现组件化。
- 22 、你自己配置过webpack、或者说你使用过webpack ，自己使用使用webpack做性能优化么。
- 23、node使用过哪些框架。
- 24、你了解过小程序的双线程模型么。
	`,
	`
## 前端学习路线
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/911cb13b51987b29b7f37754ec7853f5.png#pic_center)

### 1、HTML+CSS基础

> 掌握HTML的标签使用、排版技巧、CSS的布局定位、样式美化、浏览器兼容性。

### 2、JavaScript基础

掌握JS的基本语法、条件、语句、循环等，学会常用算法，增强逻辑性。

### 3、常用的前端工具

> 比如Webstrom、Sublime、Dreamweaver等。掌握其快捷键设置等技巧，可快速提高开发调试效率。

> 这个阶段的学习难度相对不高，学完这些之后，我们已经能完成静态页面的制作。当然，这只是入门，如果你想用这些技能找工作的话还是比较困难的。


\`\`\`javascript
 function getStartInfo(str) {
	cls = matchRule(str, 'class');
 }

function matchRule(str, rule) {
	let value = '';
	let re = new RegExp(rule + '=[\'"]?([^\'"]*)');
	//console.log('regexp:'+re)
	if (str.match(re) !== null) {
	value = str.match(re)[1];
	console.log('value:'+value)
	}
	return value;
}

\`\`\`
	`,`## 后端学习路线
![在这里插入图片描述](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/f4c83082-52d2-48de-bdb4-f1fffa69acf8.png#pic_center)
有不少初学者问到，我想学习后端，但是又不知道该怎么学，所以我决定把这几年的经验和经历整理成一篇文章，分析后端的路该怎么走，先说明下面仅仅是个人心得，也许与外面的理论有所不同。（文章最后面会附上学习路线地图和一些自己看过的书籍）



### 后端初接触
后端首先需要学习的是html，css和js，也许你会问做网页不是前端做的事情吗？答案是对于真实开发环境后端很多时候还兼顾了前端这个角色，对于架构来说优化不仅仅要考虑后端还需要考虑前端。

要学到什么样的程度才可以学下一样技能呢？我的建议是能够搭建起一个简单的页面，最重要的是学会dom操作和ajax。

### 语言选择
我相信过来人或者正在入门的人都碰到过这个世纪难题，如果你是初学者我建议您使用java。这里并不是说我喜欢java才推荐你们用java入门，而是java的思想对我们以后开发有很不错的启发。当你学会一种语言的基本语法就可以到下一步了（仅仅是语法，任意语言）。

hello world！
没错，这个时候，你得让浏览器可以看到hello world！ 为了实现这个小目标，我们就需要根据语言配置不同的运行环境。由于入门，我建议可以使用一些集成的一键配置环境软件，例如php可以用phpstudy，java看看教程，下载一个tomcat然后跟eclipse集成就好，而python或则ruby则使用一个轻量级的web框架，copy一下官网提供的hello world！例子即可。

高级一些的hello world
这个阶段，你需要实现的是通过浏览器输入不同的网址，你可以输出不同的内容。然后要弄明白什么是get参数，什么是post参数。然后要实现根据不同get参数或者post参数输出不同内容。因为后端研发从根本上来说就是处理这些不同输入，输出特定的内容回去而已，所以这一步，最关键。

### 数据库
为什么我们要用数据库呢？以一个新闻网站为例，它要保存新闻数据，还得保存用户信息，也要保存评论信息。也许你会问用文件保存就好了，为何还要学习数据库这么庞大的东西呢？首先，我们来看一下什么是数据库，我们可以把数据库每一个table看成excel的sheet，每一个db就是一个excel文件。而sql语句就是一条条指令，可以帮我们操作里面的数据，可以节省我们大量的操作。开始学习数据库的时候，我建议学习mysql。



### 模板引擎
一项技术的出现，往往在于解决了一些开发难题。在没有模板引擎之前，我们得使用字符串拼接方式，弄成html字符串，但是这种方式很容易出错的。而模板引擎无需字符串拼接，并且可以处理字符串转义问题，并且模板集成，模板引用等功能，可以使代码可以重用，大大提高了开发效率，工程也更容易维护。


### MVC框架
首先，我们得明白为什么要用框架？假如是第一次接触，我相信第一感受是用了框架加重自己的开发负担。然后框架存在必然有自己的合理性，我们来看看框架有什么优点。

1. 框架提供了大量的方法封装，我们可以直接调用来解决业务问题，这可以大大提高开发效率。

2. 框架能够帮我们分层编写代码，能够在后期更好的维护我们的项目。

3. 做一些安全防护，处理一些常见的攻击。

所以对于各种语言，大家可以选择一个对应的框架来学习。那么我们应该如何挑选一个框架呢？

1. 多人用的（最起码使用过程中遇到问题，都能找到人问）

2. 文档详细的（文档不详细，怎么去学习呢？）

3. 简单的（未来的趋势估计都是往轻量级框架走的）


### Linux与应用部署
开发用window没什么问题，但是我们做的应用绝大部分是要放在linux系统来对外提供服务器，所以不懂linux的操作是不行的，并且服务器为了尽可能节省资源，都是不使用界面的，所以我们要学好大量的linux命令。

服务器环境我们一般就不会用外面的通用的一键安装环境，往往需要优化的。所以基本的软件安装和配置需要学会，特别是近年来很火的docker，越来越多都是基于docker来部署的啦。

### 缓存
缓存可是处理高并发的万能药，每当你写的功能慢的时候，基本上你都可以通过缓存来大大提高网站性能。实现缓存的方法很简单，但是一当在并发下和海量数据面前一切都不容易，还得上分布式集群这些。

### http协议
如果上面的你都接触了，恭喜您普通开发估计是没问题了，如果你说很多需求还是做不出，没关系，其实你只是缺乏开发经验而已，只要多写多请教，你就会发现，其实后端研发也没什么难度。这个时候，如果我们想往高级研发工程师方向走，一些底层的高级的东西我们得学会。


浏览器与服务器通过http协议交互，其实就是相互之间传递一串特定格式的字符串。get参数，post参数，url，和cookie等信息其实都包含在这字符串里面。我们平时虽然没有怎么碰到这些底层的东西，其实是框架和tomcat这种软件帮我们处理了。

就像平时一个重定向，其实就在header里面有一句Location: XXX。而我们平时声明返回的是html还是json其实是headers有一句Content-Type:XXX，一切神奇的功能其实仅仅是一段特定的字符串而已，所以http协议怎么可以不研究呢。

### nosql
非关系型数据库有很多，例如memcached，redis，mongodb，coundb等。这些东西都有自己的适用场景，合理利用可以加快开发效率，对提高应用性能有很大的帮助的。

### 消息中间件
这种技术的出现是为了解耦，当我们业务过于庞大的时候，就会相应的拆分成几个小系统，系统之间的通讯往往是通过http协议调用和基于消息中间件。通过http协议有一个弊端，就是某个系统一旦修改了地址，那么就必须修改调用该服务的系统。如果通过消息中间件调用，那么应用如何迁移，也不会影响到别的系统。


### 一点点话
你跟所谓的大牛差距在哪里呢？我的看法是差距仅仅在于项目经验。也许你会说后端怎么需要学习这么多东西，并且年年都有新的技术出现怎么学呢？其实对于一种新技术，我们主要是要弄明白我们为什么要用这种技术，因为存在即合理，新技术的出现必然有自己的原因，所以新技术不一定要追求，但是底层建议要理解。然后什么海量数据和高并发下系统优化，一个原则，找到性能瓶颈并解决它而已。
\`\`\`javascript
public class MyActivity extends AppCompatActivity {
@Override  //override the function
    protected void onCreate(@Nullable Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       try {
            OkhttpManager.getInstance().setTrustrCertificates(getAssets().open("mycer.cer");
            OkHttpClient mOkhttpClient= OkhttpManager.getInstance().build();
        } catch (IOException e) {
            e.printStackTrace();
        }
}

\`\`\`
	`,
	`
## 游戏开发完整学习路线，都在这里了
![在这里插入图片描述](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/7a81eac1-3617-4cfb-ab00-cbe9b1645b7e.png#pic_center)

> 在软件开发中，游戏开发这个方向看起来目标很明确，但其实是个领域很广的方向，入门的时候如果得不到指点一二，很容易误入歧途，相反，如果走这条路之前能得到前人的一些指路，是可以事半功倍的。

### 平台与编程语言选择
首先，游戏开发的平台就有很多类型：

个人主机平台：Windows、Linux、Mac OC；
移动平台：iOS、Android、Windows Phone、BlackBerryOS、Symbian；
专业主机平台：Xbox、PlayStation、Will等。


如果你想从事移动平台的游戏开发，Android主流JAVA语言，iOS主流Object-C语言，那么你就要去学习这个平台主流的语言，而在个人主机上主流的游戏开发语言现在包括以后很长时间也还是C++。

但是并不是所不同平台的游戏开发，就毫无共通之处，学了这个到了另一个平台就无用了。不是这样的，编程的世界里你走得越远你会发现很多东西的本质都是相似的，例如你如果扎实地理解了C++的基本语法（而不是死记硬背），日后再转Java语言也不是很难的事情，因为它们本质的面向对象特性还有各种编程语言特性都是相通的。

所以，如果你想走得远，在学习的时候不能简单流于表面，对于一样知识越深入到底层，你就越能看到其它知识与其的异曲同工之处，因此你将比别人更轻松。但是，当然一开始最好尽可能是贴合自己的专属领域和编程语言，这样能尽快地在这个领域持有一席之地。

无论你选择哪个平台，游戏开发这个浩大的工程都离不开游戏引擎，所以这里都有二条路线让你选择：

### 只使用游戏引擎；
使用游戏引擎并深入学习游戏引擎原理。
线路一：只使用游戏引擎
对于第一条路线，游戏引擎的使用并不困难，因此适合想快速上手游戏开发工作的人。我们工作大多数时候也不会自己开发游戏引擎，所以这样对于一般的日常工作也没什么大碍。对于只使用游戏引擎的人来说，入门阶段要做的就是看该引擎的教程（书籍、视频、网上博客、网上教程、官方帮助文档等），并且熟练该教程所使用的编程语言。

所以你要做的第一件事，就是去了解现在流行的游戏引擎。因为不同平台下的性能不同，支持的编程语言也不尽相同，所以针对不同平台下的流行的游戏引擎也是不同的（方括号里面是特别推荐的，基于开源性、易用性、性能与效果等方面的综合水平推荐）：

windows或游戏主机：【Unreal】、寒霜、CE3
苹果ios：【unity3D】、【cocos2d-ObjC】、【Unreal】、sparrow、sprite kit。
安卓：【unity3d】、【cocos2d-x】、【Unreal】、AndEngine、libgdx。
网页：【Egret】、【cocos2d-html5】、Fancy3D、unity3d。


在选择游戏引擎的时候，尽可能选用流行的游戏引擎，因为这个游戏引擎流行意味着官方的功能比较完善和易用，问答社区也比较多人解疑。各个游戏引擎也各有千秋，Unity3d胜在简单易用，对性能要求不高，但是效果不够华丽，因而一般用在移动平台而不会用在电脑或游戏主机。Unreal胜在开源免费，而且效果也很出色，但是对设备要求比较高，因而常常用来开发效果绚丽的大型游戏。cocos2d-x也是开源免费的，在2D领域深有造诣，但是缺点是不可视化开发。另外，如果你想了解游戏引擎原理，那么首要考虑的就是开源的游戏引擎。

不同游戏引擎使用的编程语言或者脚本语言可能是不一样的，所以当你想要学习某个游戏引擎的时候，也应该留意该游戏引擎所使用的语言。大部分情况是，Windows用的的是C++，同时结合lua或python脚本语言。而ios平台下使用Objective-C或swift，安卓平台下使用Java。但这不是必然的，例如Unity在各个平台下都可以用C#或者javascript脚本语言。

下面是商业上流行的游戏引擎详细比较：

###  1) Unreal4（虚幻4）
适用平台：Microsoft Windows、Mac OS X、iOS、Android、虚拟现实设备（包括但不限于SteamVR/HTC Vive、Morpheus、Oculus Rift及Gear VR)、Linux、SteamOS及 HTML5平台。
编程语言：C++或无需编写代码。
优点：开源免费，画面效果出色，已有多款商业大作经验。同时，它还能跨平台，商店资源丰富，提供了无需编写代码即可制作游戏的强大功能（可视化开发）。
缺点：开发机器配置要求较高。
### 2) Unity3D
适用平台：iOS、Android、Windows phone 8、Tizen、Microsoft Windows、Windows Store应用程序、Mac、Linux/Steam OS、网络播放器、WebGL、PlayStation3、 PlayStation4、PlayStation Vita版、Xbox One、Xbox 360、Wii U、Android TV、Samsung SMART TV、Oculus Rift、Gear VR、Microsoft Hololens、Playstation VR。
编程语言：C#、javascript、Boo。
优点：方便易用，中文资料丰富，跨平台，商店资源丰富，可视化开发。
缺点：画面效果一般，不是免费开源，引擎效率比较低。
### 3) Cocos2d系列（包Cocos2d-x、Cocos2d-ObjC、Cocos2d-html5、Cocos2d-xna等）
适用平台：Microsoft Windows、OS X、 Linux、iOS、 Android、 Tizen、 Linux、Mac OS X、HTML5浏览器、Windows Phone 7 & 8、Xbox 360。
编程语言：Python、Objective-C、C++、 Lua、 JavaScript、 Swift、JavaScript、 C#。
优点：开源免费，跨平台，中文资料丰富，2D技术丰富且成熟。
缺点：不可视化开发，3D方面技术不成熟。
### 4) CryEngine3
适用平台：Microsoft Windows、OS X、Linux、PlayStation 3、PlayStation 4、Wii U、Xbox 360、Xbox One、iOS、Android。
编程语言：C++、Lua。
优点：画面效果世界一流，可视化开发，跨平台。
缺点：开发机器配置要求较高，不是免费开源。
### 5) Frostbite3（寒霜3）
适用平台：Microsoft Windows、PlayStation 3、PlayStation 4、Xbox 360、Xbox One。
编程语言：C++。
优点：画面效果出色，可视化开发，跨平台。
缺点：开发机器配置要求较高，不是免费开源。
### 6) Egret（白鹭）
适用平台：HTML5、iOS、Android、Windows Phone。
编程语言：TypeScript、JavaScript。
优点：免费开源，配套工具多，全中文文档，可视化开发，跨平台。
缺点：支持平台较少，大多数时候用于开发对性能和效率要求不高的小游戏。


但是使用游戏引擎毕竟是停留在表面看不到本质，当游戏开发的时候出现了某些问题或者特殊需求，你往往很难处理。而且游戏引擎技术日新月异，你所学的几乎都是别人留下来的方法，而不是其本质思想。如果将来别的游戏引擎兴起，你又要重新学习另外的游戏引擎怎么使用。在很多大公司里面，甚至都有自己公司内部专用的引擎（如网易公司的风魂引擎、金山公司的剑网3引擎、蜗牛公司的Flexi引擎等等）。所以单纯地走这条路线，可能不会让你走得很远并且可能会日渐乏味。

线路二：使用游戏引擎并深入了解游戏引擎原理
对于第二条路线，深入学习游戏引擎原理短时间不会让你的工作有什么卓越的成效，但是可以弥补只使用游戏引擎导致的问题，而且学习游戏引擎原理，更多时候不是一定就为了自己日后要造个游戏引擎，而是更深入理解自己的游戏引擎，更好地使用它。当然，千里之行始于足下，经常学习游戏引擎底层原理的人到了一定的积累的时候，自己造个游戏引擎也是可以的。

对于像学习游戏引擎原理的人来说，需要制定自己明确的长期目标：

1) 首先，一开始可能对游戏引擎没什么概念，建议先使用一两个游戏引擎（我推荐C++程序员学习虚幻4游戏引擎，现在是免费开源的，非常值得学习。那些不开源的游戏引擎尽量不要去学习，因为其对于学习原理来说没有多大贡献）。

2) 因为游戏开发就是一门实时渲染的艺术，所以离不开图形库的学习。现在主流的图形库是Windows平台专用的DirectX 11和通用平台的Opengl。这两个图形库，至少需要入门其中一个。

3) 然后，你就可以开始看计算机图形学的书籍了。如果你发现你的理论底子不足，这个时候就需要补一下线性代数、基本的微积分、还有3D数学的知识。

4） 游戏引擎中包含了各个部分，上面的渲染只是游戏引擎的一部分。还有其它诸如着色器编写、地形编写、物理引擎编写、模型和动画、人工智能体设计、网络编程等等，完成渲染部分的基本学习后，你可以选择自己感兴趣的部分进行专攻，毕竟我们实际工作大多数时候是团队开发，而不是单打独斗，每个人都应该精通自己所擅长的那部分。

这里为了文章的紧凑性，我将游戏引擎的基础理论知识和各个引擎组件的推荐书籍放到了文章的附录处。

下表是基础理论知识和游戏引擎组件书籍推荐（不必全看，请有选择地阅读）：

### 1) 数学基础
下面这些数学基础书籍是为游戏开发量身定制的，比专门看某一数学方向更有效率：

《3D Math Primer for Graphics and Game Development》，有中文版
《Mathematics for 3D Game Programming and Computer Graphics》
《Essential Mathematics Guide》
《Geometric Tools for Computer Graphics》
### 2) 图形库
针对 DirectX 的书籍：

《Introduction to 3D Game Programming with DirectX 11》，大名鼎鼎的龙书，入门必看的
《Practical Rendering and Computation with Direct3D 11》，进阶
《Real-Time 3D Rendering with DirectX and HLSL》


### 针对 OpengGL 的书籍：

《OpenGL SuperBible》，著名的蓝宝书，以例子为主，有中文版。但不建议看中文版，翻译得不好。
《OpenGL Programming Guide》，著名的红宝书，有中文版。红宝书更像是手册，API大全，例子较少，适合熟练者查询使用。
《OpenGL 4.0 Shading Language Cookbook》，进阶，基本上就是API手册，有中文版。但不建议看中文版，翻译得不好。
### 3) 计算机图形学
《The Nature of Code》，有中文版，比较简单
《Fundamentals of Computer Graphics》，被国外多所大学采用的入门教材，介绍范围比较广，从基本的相关数学到建模、渲染、动画、应用方面都有提及
《Physically Based Rendering》，主要是离线渲染
《Real-Time-Rendering》，必读经典！必读！
《计算机图形学》，作者舍利
《Computer Graphics》，要看最新的第三版
《计算机图形学原理及实践：C语言描述》
### 4) Shader着色器
《Cg_tutorial》，入门
《The Complete Effect and HLSL Guide》，入门
《Shaders for Game Programmers and Artists》，含有大量入门例子
《Advanced Lighting And Materials With Shaders》，介绍光照模型和技术
《GPU Gems》进阶必读。
《Shader X》系列，每年出版一本，包含最新的实时渲染技术。论文性的比较多，偏难。
《Programming Vertex, Geometry, and Pixel Shaders》，以DirectX 10为主，很详细。
### 5) 地形
《Real Time 3D Terrain Engines Using C++ And DX9》非常全面的讨论了关于地形渲染的各种技术。

### 6) 模型导入和动画
《Character Animation With Direct3D》包含了最新的游戏动画技术
《Computer Animation》
《Real-Time Cameras》
《Computer Facial Animation》
《Realtime 3D Character Animation with Visual C++》
《Advanced Animation and Rendering Techniques》
《Cloth Modeling and Animation》
### 7) 网络
《TCP/IP 详解 卷2》
《Network Programming for Microsoft Windows》
《Advanced Programming in the UNIX Environment》
《Windows核心编程》
《Multithreading applications in Win32》
《网络游戏核心技术与实战》
### 8) 物理
《Game Physics》
《Game Physics Engine Development》
《Real-time Collision Detection》，碰撞检测方面最好的书
《3D Game Engine Design, 2nd》第8、9章值得一看
### 9) 细节层次
《Level of Detail for 3D Graphics》

### 10) 光线跟踪
《Physical-Based Rendering - From Theory to Implementation》
《Another Introduction to Ray Tracing》
### 11) 人工智能
《Programming Game AI by Example》有中文版
《Artificial Intelligence for Games》
《AI Programming Wisdom》
《AI Game Engine Programming》
### 12) 综合
《Game Programming Gems》，文章的范围比较广，选择性阅读
《Color and Light in Nature》
《Digital Design of Nature》
《Form+Code in Design, Art, and Architecture》`,
]
