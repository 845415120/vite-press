import{_ as s,o as a,c as n,U as l}from"./chunks/framework.2333ef68.js";const A=JSON.parse('{"title":"Echarts","description":"","frontmatter":{},"headers":[],"relativePath":"其他/echarts.md","filePath":"其他/echarts.md"}'),p={name:"其他/echarts.md"},o=l(`<h1 id="echarts" tabindex="-1">Echarts <a class="header-anchor" href="#echarts" aria-label="Permalink to &quot;Echarts&quot;">​</a></h1><p>echarts 是一个非常强大的数据可视化库，它可以实现各种图表的绘制，从简单的折线图到复杂的热力图和地图。下面是 echarts 基本的设置过程：</p><h2 id="_1-准备数据" tabindex="-1">1.准备数据 <a class="header-anchor" href="#_1-准备数据" aria-label="Permalink to &quot;1.准备数据&quot;">​</a></h2><p>首先需要准备好要展示的数据，可以是数组、对象等多种格式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">41</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_2-引入-echarts-库" tabindex="-1">2.引入 echarts 库 <a class="header-anchor" href="#_2-引入-echarts-库" aria-label="Permalink to &quot;2.引入 echarts 库&quot;">​</a></h2><p>在页面中引入 echarts 库，可以通过下载本地文件或者引入 cdn 地址来使用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_3-初始化图表" tabindex="-1">3.初始化图表 <a class="header-anchor" href="#_3-初始化图表" aria-label="Permalink to &quot;3.初始化图表&quot;">​</a></h2><p>根据需要的图表类型，在页面中创建一个具有宽高的 dom 元素，并使用 echarts 初始化该元素，生成图表实例。需要传递一些基本配置选项。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myChart</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 600px; height: 400px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myChart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myChart</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 基本配置</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> option </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ... 具体配置</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用 option 配置图表实例</span></span>
<span class="line"><span style="color:#A6ACCD;">myChart</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setOption</span><span style="color:#A6ACCD;">(option)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_4-配置参数" tabindex="-1">4.配置参数 <a class="header-anchor" href="#_4-配置参数" aria-label="Permalink to &quot;4.配置参数&quot;">​</a></h2><p>根据图表的类型和展示需求，配置相应的参数，其中包括图表主题、图表类型、坐标轴、数据系列、图例等。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> option </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 主题</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tooltip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 图表类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">41</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 坐标轴</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">xAxis</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">category</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Wed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Thu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Fri</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">yAxis</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h2 id="_5-将数据绑定到图表实例上" tabindex="-1">5.将数据绑定到图表实例上 <a class="header-anchor" href="#_5-将数据绑定到图表实例上" aria-label="Permalink to &quot;5.将数据绑定到图表实例上&quot;">​</a></h2><p>最后将数据绑定到图表实例上并渲染出图表即可。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 使用 option 配置图表实例</span></span>
<span class="line"><span style="color:#A6ACCD;">myChart</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setOption</span><span style="color:#A6ACCD;">(option)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,17),t=[o];function e(c,r,D,y,F,i){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{A as __pageData,h as default};
