import{_ as a,o as e,c as l,U as t}from"./chunks/framework.2333ef68.js";const g=JSON.parse('{"title":"flex","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/flex布局.md","filePath":"CSS/flex布局.md"}'),i={name:"CSS/flex布局.md"},s=t(`<h1 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h1><p>一张图看懂flex <img src="https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230713/image.nhiz1fthvuo.png" alt="一图流"> Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。<br>任何一个容器都可以指定为 Flex 布局。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{   display: flex; }</span></span></code></pre></div><p>行内元素也可以使用 Flex 布局。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{   display: inline-flex; }</span></span></code></pre></div><p>注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。</p><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。<br><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755868641-51fb03a4-0bd1-41fa-a199-929ecd34dfae.png#averageHue=%23f3e5c2&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u42227cc2&amp;originHeight=333&amp;originWidth=563&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u7126efd1-451f-4762-b184-84394b8bb00&amp;title=" alt=""><br>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。<br>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</p><h2 id="容器的属性" tabindex="-1">容器的属性 <a class="header-anchor" href="#容器的属性" aria-label="Permalink to &quot;容器的属性&quot;">​</a></h2><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="flex-direction属性" tabindex="-1">flex-direction属性 <a class="header-anchor" href="#flex-direction属性" aria-label="Permalink to &quot;flex-direction属性&quot;">​</a></h3><p>flex-direction属性决定主轴的方向（即项目的排列方向）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {   flex-direction: row | row-reverse | column | column-reverse; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755966535-e91796e8-2dc4-4e16-bded-eb8377d0905b.png#averageHue=%23fbeadc&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u56fc6b0f&amp;originHeight=203&amp;originWidth=796&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ua10138ee-e0b6-4064-ada0-fe764b39355&amp;title=" alt=""><br>它可能有4个值。</p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><h3 id="flex-wrap属性" tabindex="-1">flex-wrap属性 <a class="header-anchor" href="#flex-wrap属性" aria-label="Permalink to &quot;flex-wrap属性&quot;">​</a></h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。<br><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755990338-fccc46d5-1957-42d2-9fb2-2da19193949f.png#averageHue=%23a0557f&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u6c3a67a2&amp;originHeight=276&amp;originWidth=798&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uf85a2bb8-7d81-4a08-96fe-9bce541d73e&amp;title=" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{   flex-wrap: nowrap | wrap | wrap-reverse; }</span></span></code></pre></div><p>它可能取三个值。<br>（1）nowrap（默认）：不换行。<br><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756003102-90e2d937-84b1-44e2-99d6-01c0f2a0e843.png#averageHue=%23f9d063&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u331875b0&amp;originHeight=145&amp;originWidth=700&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u8f2723c8-547f-4051-a6db-20c857997b4&amp;title=" alt=""><br>（2）wrap：换行，第一行在上方。<br><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756003118-b134ae17-e1f1-4178-81a4-62e226fad7d8.jpeg#averageHue=%23fad260&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u2cd2939d&amp;originHeight=177&amp;originWidth=700&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uc0f4867d-eae9-449c-9587-8507fd35775&amp;title=" alt=""><br>（3）wrap-reverse：换行，第一行在下方。<br><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756003148-ca592831-e43e-4e64-82d1-14917a3b52c3.jpeg#averageHue=%23fad25e&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=ud4fee11c&amp;originHeight=177&amp;originWidth=700&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ued3c8d01-6553-4f77-a2b0-005f32e81f4&amp;title=" alt=""></p><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h3><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {   flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;; }</span></span></code></pre></div><h3 id="justify-content属性" tabindex="-1">justify-content属性 <a class="header-anchor" href="#justify-content属性" aria-label="Permalink to &quot;justify-content属性&quot;">​</a></h3><p>justify-content属性定义了项目在主轴上的对齐方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {   justify-content: flex-start | flex-end | center | space-between | space-around; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756040981-411585f1-755b-46bd-9607-7dd37279370d.png#averageHue=%23c799b0&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u8e6de34c&amp;originHeight=763&amp;originWidth=637&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u5b8c8448-925f-4ff7-bcae-07a2a5103ee&amp;title=" alt=""><br>它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h3 id="align-items属性" tabindex="-1">align-items属性 <a class="header-anchor" href="#align-items属性" aria-label="Permalink to &quot;align-items属性&quot;">​</a></h3><p>align-items属性定义项目在交叉轴上如何对齐。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {   align-items: flex-start | flex-end | center | baseline | stretch; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756064572-2d000c37-0c49-4043-8f44-aa03b1582bf6.png#averageHue=%23cb8c87&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=ue932da84&amp;originHeight=786&amp;originWidth=617&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u4cada9e9-e4b7-46b7-a3ec-ce18b0f6ea5&amp;title=" alt=""><br>它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><h3 id="align-content属性" tabindex="-1">align-content属性 <a class="header-anchor" href="#align-content属性" aria-label="Permalink to &quot;align-content属性&quot;">​</a></h3><p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {   align-content: flex-start | flex-end | center | space-between | space-around | stretch; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756107985-f0a73ebd-e0c9-4c46-87b8-cdee9565e329.png#averageHue=%23c48c8a&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=uf70d003b&amp;originHeight=786&amp;originWidth=620&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u7ca9525d-81da-4d23-ab63-e6f0763dbcf&amp;title=" alt=""><br>该属性可能取6个值。</p><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><h3 id="项目的属性" tabindex="-1">项目的属性 <a class="header-anchor" href="#项目的属性" aria-label="Permalink to &quot;项目的属性&quot;">​</a></h3><p>以下6个属性设置在项目上。</p><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><h3 id="order属性" tabindex="-1">order属性 <a class="header-anchor" href="#order属性" aria-label="Permalink to &quot;order属性&quot;">​</a></h3><p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {   order: &lt;integer&gt;; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756158953-f927a126-b661-41ba-92dc-61df1777d4f8.png#averageHue=%23e67f25&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u5bce438b&amp;originHeight=480&amp;originWidth=751&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u7fea02aa-e354-4149-9cdc-3699f2316e2&amp;title=" alt=""></p><h3 id="flex-grow属性" tabindex="-1">flex-grow属性 <a class="header-anchor" href="#flex-grow属性" aria-label="Permalink to &quot;flex-grow属性&quot;">​</a></h3><p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {   flex-grow: &lt;number&gt;; /* default 0 */ }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756173594-ec2d4066-cee4-4fbd-a1b3-f9c79fb1bc60.png#averageHue=%23e67f24&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=uc3ffc1e7&amp;originHeight=211&amp;originWidth=802&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uf1d4d460-1323-4a40-b9b5-5631911f444&amp;title=" alt=""><br>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="flex-shrink属性" tabindex="-1">flex-shrink属性 <a class="header-anchor" href="#flex-shrink属性" aria-label="Permalink to &quot;flex-shrink属性&quot;">​</a></h3><p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex-shrink: &lt;number&gt;; /* default 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756173669-a34b2f72-d9de-4ea4-b5c4-ec782fcba76d.jpeg#averageHue=%23f8d16a&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=u22b3ab63&amp;originHeight=145&amp;originWidth=700&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u61bd43cc-3bc7-466b-be9d-cb7d9a1d5ab&amp;title=" alt=""><br>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。<br>负值对该属性无效。</p><h3 id="flex-basis属性" tabindex="-1">flex-basis属性 <a class="header-anchor" href="#flex-basis属性" aria-label="Permalink to &quot;flex-basis属性&quot;">​</a></h3><p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {   flex-basis: &lt;length&gt; | auto; /* default auto */ }</span></span></code></pre></div><p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p><h3 id="flex属性" tabindex="-1">flex属性 <a class="header-anchor" href="#flex属性" aria-label="Permalink to &quot;flex属性&quot;">​</a></h3><p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {   flex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ] }</span></span></code></pre></div><p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。<br>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><h3 id="align-self属性" tabindex="-1">align-self属性 <a class="header-anchor" href="#align-self属性" aria-label="Permalink to &quot;align-self属性&quot;">​</a></h3><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.item {   align-self: auto | flex-start | flex-end | center | baseline | stretch; }</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756173637-ee168e61-ff90-49b7-8b25-de1fa7ba97b2.png#averageHue=%23d9b3ba&amp;clientId=u552244c6-ed78-4&amp;from=paste&amp;id=ud6c28083&amp;originHeight=390&amp;originWidth=743&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u69e22f32-4a50-43be-95cd-c32624c85a7&amp;title=" alt=""><br>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p>`,64),n=[s];function p(o,r,c,d,m,u){return e(),l("div",null,n)}const h=a(i,[["render",p]]);export{g as __pageData,h as default};
