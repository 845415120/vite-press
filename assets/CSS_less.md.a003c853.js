import{_ as s,o as a,c as l,U as n}from"./chunks/framework.2333ef68.js";const d=JSON.parse('{"title":"Less","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/less.md","filePath":"CSS/less.md"}'),o={name:"CSS/less.md"},e=n(`<h1 id="less" tabindex="-1">Less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;Less&quot;">​</a></h1><h3 id="less-变量" tabindex="-1">Less 变量 <a class="header-anchor" href="#less-变量" aria-label="Permalink to &quot;Less 变量&quot;">​</a></h3><p>变量是指没有固定的值，CSS 中一些颜色和数值经常使用。</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">变量名</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">值</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>举例</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 定义一个粉色变量</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">font14</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">font14</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="变量命名规范" tabindex="-1">变量命名规范 <a class="header-anchor" href="#变量命名规范" aria-label="Permalink to &quot;变量命名规范&quot;">​</a></h4><ul><li>必须有 <code>@</code> 前缀</li><li>不能包含特殊字符</li><li>不能以数字开头（除去前缀 <code>@</code> 的部分）</li><li>大小写敏感</li></ul><h3 id="less-编译" tabindex="-1">Less 编译 <a class="header-anchor" href="#less-编译" aria-label="Permalink to &quot;Less 编译&quot;">​</a></h3><p>本质上，Less包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的CSS文件。</p><p>所以，我们需要把我们的less文件，编译生成为css文件，这样我们的html页面才能使用。</p><p>在 VS Code 中，<strong>使用 Easy Less 插件</strong> 可以即时编译生成 CSS 文件，再引入即可。</p><h3 id="less-嵌套" tabindex="-1">Less 嵌套 <a class="header-anchor" href="#less-嵌套" aria-label="Permalink to &quot;Less 嵌套&quot;">​</a></h3><p>类似于html元素之间的嵌套，Less 里也可以把选择器嵌套。</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>等同于：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="less-中伪类、交集选择器、伪元素选择器的写法" tabindex="-1">Less 中伪类、交集选择器、伪元素选择器的写法 <a class="header-anchor" href="#less-中伪类、交集选择器、伪元素选择器的写法" aria-label="Permalink to &quot;Less 中伪类、交集选择器、伪元素选择器的写法&quot;">​</a></h4><p>要在 less 中写伪类、交集选择器、伪元素选择器，则要在内层选择器的前面加上 <code>&amp;</code>。</p><ul><li>内层选择器前面没有 <code>&amp;</code>，则它被解析为父选择器的后代；</li><li>若有 <code>&amp;</code>，则被解析为父元素自身或父元素的伪类。</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Less嵌套写法：</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="less-运算-⚡" tabindex="-1">Less 运算 ⚡ <a class="header-anchor" href="#less-运算-⚡" aria-label="Permalink to &quot;Less 运算 ⚡&quot;">​</a></h3><p>任何数字、颜色或者变量都可以参与运算，Less 提供了加（<code>+</code>）、减（<code>-</code>）、乘（<code>*</code>）、除（<code>/</code>）算数运算。</p><h4 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h4><ul><li>对于除法运算，需要用圆括号括起来</li><li>运算符的作用左右两侧要有空格</li><li>运算数若只有一个带有单位，则最后结果以此为单位</li><li>若有多个单位，则以第一个单位为准</li></ul><p>页面元素的 rem 值 = 页面元素在750像素下的px值 / html里面的文字大小</p>`,28),p=[e];function c(t,r,i,D,C,y){return a(),l("div",null,p)}const A=s(o,[["render",c]]);export{d as __pageData,A as default};