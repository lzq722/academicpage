import{_ as E,a as S,b as h,E as D,c as C,d as T,e as I,f as R,g as A,h as B}from"./CT7tbE2e.js";import{_ as K}from"./CcXF7QuA.js";import{_ as P}from"./COzkKk2s.js";import{D as b,d as _,r as w,x as i,E as r,y as t,A as n,B as d,C as l,F as p,v as o,G as y}from"./DqtxMH0P.js";import{_ as G}from"./DlAUqK2U.js";const L=b("/image/project1.png"),F=b("/image/project2_1.png"),U=b("/image/project2_2.png"),M={class:"bg"},J={class:"achievement"},N={class:"achievements"},W={style:{display:"flex","flex-direction":"column",gap:"72px","margin-top":"80px"}},z={key:0,class:"atext"},q={key:1,class:"atext"},V={key:2,class:"atext"},O={class:"teaching"},Z={class:"card"},j={class:"tutorials"},H={key:0,class:"coursebig"},$={key:1,class:"coursebig"},Q={key:2,class:"coursebig"},X=_({__name:"wu",setup(Y){const e=w(1),c=w(0),v=s=>{e.value=s},x=s=>{c.value=s,document.body.style.overflow="hidden";const a=document.getElementById("overlay");a&&(a.style.display="block")},f=()=>{c.value=0,document.body.style.overflow="auto";const s=document.getElementById("overlay");s&&(s.style.display="none")};return(s,a)=>{const g=A,u=B,k=D;return o(),i("div",M,[a[29]||(a[29]=r('<div class="top" data-v-7c5f6169><div class="topcontainer" data-v-7c5f6169><div class="tname" data-v-7c5f6169>Dingming Wu</div><div class="tintro" data-v-7c5f6169>Associate Professor<br data-v-7c5f6169>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-7c5f6169><img src="'+C+'" alt="" class="icon_address" data-v-7c5f6169><span class="locationtext" data-v-7c5f6169>Zhiteng Building 618-2</span></div><div class="temail" data-v-7c5f6169><img src="'+T+'" alt="" class="icon_email" data-v-7c5f6169><span class="emailtext" data-v-7c5f6169>dingming@szu.edu.cn</span></div><img src="'+P+'" alt="" class="teacherimg" data-v-7c5f6169></div></div><p class="text" data-v-7c5f6169> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p><div class="research" data-v-7c5f6169><div class="rtitle" data-v-7c5f6169><img src="'+K+'" alt="" class="rellipse" data-v-7c5f6169><p class="title" data-v-7c5f6169>Research</p><div class="rline1" data-v-7c5f6169></div><div class="rline2" data-v-7c5f6169></div></div><p class="ri" data-v-7c5f6169>Research Interests</p><div class="rifield" data-v-7c5f6169><p class="ritext" data-v-7c5f6169> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Long-Term-Goal" data-v-7c5f6169>Long-Term Goal</p><p class="ltgtext" data-v-7c5f6169> My long-term goal aims to develop the GIS, visualization, statistical, and machine learning software packages, like QGIS, ArcGIS, CrimeStat, Seaborn, Scikit-learn, Scipy, and LIBSVM, which are based on our theoretically efficient algorithms (e.g., reduce the time complexity) with non-trivial accuracy guarantees (e.g., achieve exact results or approximate results with approximation ratio). With the lower time complexity of our solutions, our software packages should be the fastest in the world. </p><p class="Selected-projects" data-v-7c5f6169>Selected projects</p><p class="sptext" data-v-7c5f6169> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and knowledge graph data, including data modeling, query languages, query processing, data mining, and indexing. </p><div class="group" data-v-7c5f6169><p class="gtitle" data-v-7c5f6169>Efficient and Accurate PageRank Approximation on Large Graphs</p><p class="gintro" data-v-7c5f6169>PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p><div style="display:flex;" data-v-7c5f6169><img src="'+L+'" alt="" class="gimg1" data-v-7c5f6169></div></div><div class="group2" data-v-7c5f6169><p class="gtitle" data-v-7c5f6169>Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs</p><p class="gintro" data-v-7c5f6169>Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p><div style="display:flex;" data-v-7c5f6169><img src="'+F+'" alt="" class="gimg1" data-v-7c5f6169><img src="'+U+'" alt="" class="gimg2" data-v-7c5f6169></div></div></div>',3)),t("div",J,[a[11]||(a[11]=t("img",{src:E,alt:"",class:"aellipse"},null,-1)),a[12]||(a[12]=t("p",{class:"atitle"},"Achievements",-1)),a[13]||(a[13]=t("div",{class:"aline1"},null,-1)),a[14]||(a[14]=t("div",{class:"aline2"},null,-1)),t("div",N,[n(k,null,{default:d(()=>[n(g,{span:2}),n(g,{span:8},{default:d(()=>[t("div",W,[n(u,{class:y(["abutton",{selecttab:e.value===1}]),onClick:a[0]||(a[0]=m=>v(1))},{default:d(()=>a[4]||(a[4]=[l("Research Awards")])),_:1},8,["class"]),n(u,{class:y(["abutton",{selecttab:e.value===2}]),onClick:a[1]||(a[1]=m=>v(2))},{default:d(()=>a[5]||(a[5]=[l("Research Grants")])),_:1},8,["class"]),n(u,{class:y(["abutton",{selecttab:e.value===3}]),onClick:a[2]||(a[2]=m=>v(3))},{default:d(()=>a[6]||(a[6]=[l("Research Publications")])),_:1},8,["class"])]),a[7]||(a[7]=t("div",{class:"dblp"},"[DBLP] [Google Scholar]",-1))]),_:1}),n(g,{span:12},{default:d(()=>[e.value===1?(o(),i("div",z,a[8]||(a[8]=[t("p",null,"2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1),t("p",null,"2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1)]))):p("",!0),e.value===2?(o(),i("div",q,a[9]||(a[9]=[t("p",null,"项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。",-1),t("p",null,"项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。",-1),t("p",null,"项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。",-1),t("p",null,"项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。",-1)]))):p("",!0),e.value===3?(o(),i("div",V,a[10]||(a[10]=[t("p",null,"Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)",-1),t("p",null,"Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)",-1),t("p",null,"Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)",-1),t("p",null,"Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),t("p",null,"Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)",-1),t("p",null,"Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):p("",!0)]),_:1})]),_:1})])]),a[30]||(a[30]=r('<div class="ps" data-v-7c5f6169><div class="pstitle" data-v-7c5f6169><img src="'+I+'" alt="" class="pellipse" data-v-7c5f6169><p class="ptitle" data-v-7c5f6169>Professional Services</p><div class="pline1" data-v-7c5f6169></div><div class="pline2" data-v-7c5f6169></div></div><table style="border-collapse:separate;border-spacing:0px 64px;" data-v-7c5f6169><tbody data-v-7c5f6169><tr data-v-7c5f6169><td class="tdtitle" data-v-7c5f6169>Journal Referee</td><td class="tdtext" data-v-7c5f6169><span data-v-7c5f6169>The International Journal on Very Large Data Bases (VLDBJ)</span><br data-v-7c5f6169><span data-v-7c5f6169>IEEE Transactions on Knowledge and Data Engineering (TKDE)</span><br data-v-7c5f6169></td></tr><tr data-v-7c5f6169><td class="tdtitle" data-v-7c5f6169>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-7c5f6169><span data-v-7c5f6169>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</span><br data-v-7c5f6169><span data-v-7c5f6169>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</span><br data-v-7c5f6169><span data-v-7c5f6169>AAAI Conference on Artificial Intelligence 2024, 2022</span><br data-v-7c5f6169><span data-v-7c5f6169>International Joint Conference on Artificial Intelligence (IJCAI) 2021</span><br data-v-7c5f6169></td></tr></tbody><colgroup data-v-7c5f6169><col data-v-7c5f6169><col data-v-7c5f6169></colgroup></table></div>',1)),t("div",O,[a[26]||(a[26]=r('<div class="teachingtitle" data-v-7c5f6169><img src="'+R+'" alt="" class="tellipse" data-v-7c5f6169><p class="ptitle" data-v-7c5f6169>Teaching</p><div class="pline1" data-v-7c5f6169></div><div class="pline2" data-v-7c5f6169></div></div>',1)),t("div",Z,[a[17]||(a[17]=r('<div class="course" data-v-7c5f6169><p class="ctitle" data-v-7c5f6169>Course</p><div class="ctext" data-v-7c5f6169><p data-v-7c5f6169>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-7c5f6169>Data Structures (Fall 2024-2019)</p><p data-v-7c5f6169>Big Data Processing and Analytics (Spring 2019)</p><p data-v-7c5f6169>Introdution to Big Data (Fall 2018-2017)</p><p data-v-7c5f6169>Information Retrieval (Spring 2018-2017)</p><p data-v-7c5f6169>Search Engine Technology (Fall 2016)</p></div></div><div class="at" data-v-7c5f6169><p class="ctitle" data-v-7c5f6169>Awards</p><div class="ctext" data-v-7c5f6169><p data-v-7c5f6169>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-7c5f6169>2023年广东省一流本科课程，算法设计与分析</p><p data-v-7c5f6169>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div></div>',2)),t("div",j,[a[16]||(a[16]=r('<p class="ctitle" data-v-7c5f6169>Students</p><div class="ctext" data-v-7c5f6169><p data-v-7c5f6169>在读学生</p><p data-v-7c5f6169>博士生：伍斯玥</p><p data-v-7c5f6169>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><p data-v-7c5f6169>毕业学生</p><p data-v-7c5f6169>赖新颖，华为</p><p data-v-7c5f6169>吕华彬，九维数据技术有限公司</p><p data-v-7c5f6169>袁楚杰，字节跳动</p><p data-v-7c5f6169>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-7c5f6169>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-7c5f6169>李密，招银网络科技有限公司</p><p data-v-7c5f6169>杜国良，广州凯媒通讯技术有限公司</p><p data-v-7c5f6169>吴亿欣，中国人寿保险股份有限公司</p><p data-v-7c5f6169>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-7c5f6169>吴松，读博（Utrecht University, Netherlands）</p><p data-v-7c5f6169>林俊杰，招银网络科技有限公司</p><p data-v-7c5f6169>陈萌，上海微创医疗机器人</p><p data-v-7c5f6169>詹金颖，华为</p><p data-v-7c5f6169>李昕宸，读博（深圳大学）</p><p data-v-7c5f6169>侯灿，建信金融科技公司</p><p data-v-7c5f6169>周豪，华为</p><p data-v-7c5f6169>罗德新，腾讯</p><p data-v-7c5f6169>朱艺，字节跳动，优秀毕业生</p></div>',2)),t("button",{class:"more",style:{display:"flex"},onClick:a[3]||(a[3]=m=>x(3))},a[15]||(a[15]=[l(" MORE "),t("img",{src:S,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])]),a[27]||(a[27]=t("div",{class:"book"},[t("p",{class:"booktitle"},"Book"),t("div",{class:"booktext"},[t("p",null,"《算法设计与分析实践案例解析》，清华大学出版社"),t("p",null,"《算法设计与分析》，清华大学出版社")])],-1)),a[28]||(a[28]=t("div",{id:"overlay",class:"overlay"},null,-1)),c.value===1?(o(),i("div",H,[a[19]||(a[19]=t("p",{class:"titlebig"},"Course",-1)),a[20]||(a[20]=t("div",{class:"textbig"},[t("p",null,"Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)"),t("p",null,"Data Structures (Fall 2024-2019)"),t("p",null,"Big Data Processing and Analytics (Spring 2019)"),t("p",null,"Introdution to Big Data (Fall 2018-2017)"),t("p",null,"Information Retrieval (Spring 2018-2017)"),t("p",null,"Search Engine Technology (Fall 2016)")],-1)),t("button",{class:"fold",style:{display:"flex"},onClick:f},a[18]||(a[18]=[l(" FOLD "),t("img",{src:h,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):p("",!0),c.value===2?(o(),i("div",$,[a[22]||(a[22]=t("p",{class:"titlebig"},"Awards",-1)),a[23]||(a[23]=t("div",{class:"textbig"},[t("p",null,"2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖"),t("p",null,"2023年广东省一流本科课程，算法设计与分析"),t("p",null,"2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践")],-1)),t("button",{class:"fold",style:{display:"flex"},onClick:f},a[21]||(a[21]=[l(" FOLD "),t("img",{src:h,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):p("",!0),c.value===3?(o(),i("div",Q,[a[25]||(a[25]=r('<p class="titlebig" data-v-7c5f6169>Students</p><div class="textbig" data-v-7c5f6169><p data-v-7c5f6169>在读学生</p><p data-v-7c5f6169>博士生：伍斯玥</p><p data-v-7c5f6169>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><p data-v-7c5f6169>毕业学生</p><p data-v-7c5f6169>赖新颖，华为</p><p data-v-7c5f6169>吕华彬，九维数据技术有限公司</p><p data-v-7c5f6169>袁楚杰，字节跳动</p><p data-v-7c5f6169>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-7c5f6169>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-7c5f6169>李密，招银网络科技有限公司</p><p data-v-7c5f6169>杜国良，广州凯媒通讯技术有限公司</p><p data-v-7c5f6169>吴亿欣，中国人寿保险股份有限公司</p><p data-v-7c5f6169>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-7c5f6169>吴松，读博（Utrecht University, Netherlands）</p><p data-v-7c5f6169>林俊杰，招银网络科技有限公司</p><p data-v-7c5f6169>陈萌，上海微创医疗机器人</p><p data-v-7c5f6169>詹金颖，华为</p><p data-v-7c5f6169>李昕宸，读博（深圳大学）</p><p data-v-7c5f6169>侯灿，建信金融科技公司</p><p data-v-7c5f6169>周豪，华为</p><p data-v-7c5f6169>罗德新，腾讯</p><p data-v-7c5f6169>朱艺，字节跳动，优秀毕业生</p></div>',2)),t("button",{class:"fold",style:{display:"flex"},onClick:f},a[24]||(a[24]=[l(" FOLD "),t("img",{src:h,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):p("",!0)]),a[31]||(a[31]=t("p",{class:"welcome"},"Welcome to the Database Group in Shenzhen University (SZU).",-1))])}}}),na=G(X,[["__scopeId","data-v-7c5f6169"]]);export{na as default};
