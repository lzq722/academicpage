import{_ as k,a as E,b as u,E as D,c as C,d as S,e as T,f as A,g as I,h as R}from"./CG25bI3m.js";import{_}from"./ChXD88tO.js";import{_ as K}from"./BOSwpZTH.js";import{d as P,r as y,v as i,x as n,E as l,y as t,A as o,B as m,C as p,F as r,G as h}from"./Ddk1ZhI5.js";import{_ as B}from"./DlAUqK2U.js";const F={class:"bg"},U={class:"research"},J={class:"group"},L={style:{display:"flex",position:"relative"}},M={class:"image-container","data-text":"Click to view"},G={class:"group2"},N={style:{display:"flex"}},W={class:"image-container","data-text":"Click to view"},z={class:"image-container","data-text":"Click to view"},j={class:"achievement"},q={class:"achievements"},V={style:{display:"flex","flex-direction":"column",gap:"72px","margin-top":"80px"}},O={key:0,class:"atext"},Z={key:1,class:"atext"},H={key:2,class:"atext"},$={class:"teaching"},Q={class:"card"},X={class:"tutorials"},Y={key:0,class:"coursebig"},aa={key:1,class:"coursebig"},ta={key:2,class:"coursebig"},ea=P({__name:"wu",setup(sa){const e=y(1),d=y(0),f=s=>{e.value=s},w=s=>{d.value=s,document.body.style.overflow="hidden";const a=document.getElementById("overlay");a&&(a.style.display="block")},b=()=>{d.value=0,document.body.style.overflow="auto";const s=document.getElementById("overlay");s&&(s.style.display="none")};return(s,a)=>{const v=D,c=R,x=C;return i(),n("div",F,[a[31]||(a[31]=l('<div class="top" data-v-28bf30fb><div class="topcontainer" data-v-28bf30fb><div class="tname" data-v-28bf30fb>Dingming Wu</div><div class="tintro" data-v-28bf30fb>Associate Professor<br data-v-28bf30fb>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-28bf30fb><img src="'+S+'" alt="" class="icon_address" data-v-28bf30fb><span class="locationtext" data-v-28bf30fb>Zhiteng Building 618-2</span></div><div class="temail" data-v-28bf30fb><img src="'+T+'" alt="" class="icon_email" data-v-28bf30fb><span class="emailtext" data-v-28bf30fb>dingming@szu.edu.cn</span></div><img src="'+K+'" alt="" class="teacherimg" data-v-28bf30fb></div></div><p class="text" data-v-28bf30fb> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p>',2)),t("div",U,[a[8]||(a[8]=l('<div class="rtitle" data-v-28bf30fb><img src="'+_+'" alt="" class="rellipse" data-v-28bf30fb><p class="title" data-v-28bf30fb>Research</p><div class="rline1" data-v-28bf30fb></div><div class="rline2" data-v-28bf30fb></div></div><p class="ri" data-v-28bf30fb>Research Interests</p><div class="rifield" data-v-28bf30fb><p class="ritext" data-v-28bf30fb> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-28bf30fb>Selected projects</p>',4)),t("div",J,[a[4]||(a[4]=t("p",{class:"gtitle"},"Efficient and Accurate PageRank Approximation on Large Graphs",-1)),a[5]||(a[5]=t("p",{class:"gintro"},"PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.",-1)),t("div",L,[t("div",M,[o(v,{src:"/academicpage/image/project1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project1.png"]})])])]),t("div",G,[a[6]||(a[6]=t("p",{class:"gtitle"},"Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs",-1)),a[7]||(a[7]=t("p",{class:"gintro"},"Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.",-1)),t("div",N,[t("div",W,[o(v,{src:"/academicpage/image/project2_1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project2_1.png"]})]),t("div",z,[o(v,{src:"/academicpage/image/project2_2.png",fit:"cover",alt:"",class:"gimg2","preview-src-list":["/academicpage/image/project2_2.png"]})])])])]),t("div",j,[a[13]||(a[13]=t("img",{src:k,alt:"",class:"aellipse"},null,-1)),a[14]||(a[14]=t("p",{class:"atitle"},"Achievements",-1)),a[15]||(a[15]=t("div",{class:"aline1"},null,-1)),a[16]||(a[16]=t("div",{class:"aline2"},null,-1)),t("div",q,[o(x,null,{default:m(()=>[o(c,{span:2}),o(c,{span:8},{default:m(()=>[t("div",V,[t("button",{class:h(["abutton",{selecttab:e.value===1}]),onClick:a[0]||(a[0]=g=>f(1))},"Research Awards",2),t("button",{class:h(["abutton",{selecttab:e.value===2}]),onClick:a[1]||(a[1]=g=>f(2))},"Research Grants",2),t("button",{class:h(["abutton",{selecttab:e.value===3}]),onClick:a[2]||(a[2]=g=>f(3))},"Research Publications",2)]),a[9]||(a[9]=t("div",{class:"dblp"},[t("a",{href:"https://dblp.org/pid/81/6181.html",target:"_blank",style:{color:"#2F81FC"}},"[DBLP]"),p("  "),t("a",{href:"https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",target:"_blank",style:{color:"#2F81FC"}},"[Google Scholar]")],-1))]),_:1}),o(c,{span:12},{default:m(()=>[e.value===1?(i(),n("div",O,a[10]||(a[10]=[t("p",null,"2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1),t("p",null,"2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1)]))):r("",!0),e.value===2?(i(),n("div",Z,a[11]||(a[11]=[t("p",null,"项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。",-1),t("p",null,"项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。",-1),t("p",null,"项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。",-1),t("p",null,"项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。",-1)]))):r("",!0),e.value===3?(i(),n("div",H,a[12]||(a[12]=[t("p",null,"Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)",-1),t("p",null,"Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)",-1),t("p",null,"Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)",-1),t("p",null,"Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),t("p",null,"Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)",-1),t("p",null,"Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):r("",!0)]),_:1})]),_:1})])]),a[32]||(a[32]=l('<div class="ps" data-v-28bf30fb><div class="pstitle" data-v-28bf30fb><img src="'+A+'" alt="" class="pellipse" data-v-28bf30fb><p class="ptitle" data-v-28bf30fb>Professional Services</p><div class="pline1" data-v-28bf30fb></div><div class="pline2" data-v-28bf30fb></div></div><table style="border-collapse:separate;border-spacing:0px 64px;" data-v-28bf30fb><tbody data-v-28bf30fb><tr data-v-28bf30fb><td class="tdtitle" data-v-28bf30fb>Journal Referee</td><td class="tdtext" data-v-28bf30fb><span data-v-28bf30fb>The International Journal on Very Large Data Bases (VLDBJ)</span><br data-v-28bf30fb><span data-v-28bf30fb>IEEE Transactions on Knowledge and Data Engineering (TKDE)</span><br data-v-28bf30fb></td></tr><tr data-v-28bf30fb><td class="tdtitle" data-v-28bf30fb>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-28bf30fb><span data-v-28bf30fb>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</span><br data-v-28bf30fb><span data-v-28bf30fb>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</span><br data-v-28bf30fb><span data-v-28bf30fb>AAAI Conference on Artificial Intelligence 2024, 2022</span><br data-v-28bf30fb><span data-v-28bf30fb>International Joint Conference on Artificial Intelligence (IJCAI) 2021</span><br data-v-28bf30fb></td></tr></tbody><colgroup data-v-28bf30fb><col data-v-28bf30fb><col data-v-28bf30fb></colgroup></table></div>',1)),t("div",$,[a[28]||(a[28]=l('<div class="teachingtitle" data-v-28bf30fb><img src="'+I+'" alt="" class="tellipse" data-v-28bf30fb><p class="ptitle" data-v-28bf30fb>Teaching</p><div class="pline1" data-v-28bf30fb></div><div class="pline2" data-v-28bf30fb></div></div>',1)),t("div",Q,[a[19]||(a[19]=l('<div class="course" data-v-28bf30fb><p class="ctitle" data-v-28bf30fb>Courses</p><div class="ctext" data-v-28bf30fb><p data-v-28bf30fb>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-28bf30fb>Data Structures (Fall 2024-2019)</p><p data-v-28bf30fb>Big Data Processing and Analytics (Spring 2019)</p><p data-v-28bf30fb>Introdution to Big Data (Fall 2018-2017)</p><p data-v-28bf30fb>Information Retrieval (Spring 2018-2017)</p><p data-v-28bf30fb>Search Engine Technology (Fall 2016)</p></div></div><div class="at" data-v-28bf30fb><p class="ctitle" data-v-28bf30fb>Awards</p><div class="ctext" data-v-28bf30fb><p data-v-28bf30fb>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-28bf30fb>2023年广东省一流本科课程，算法设计与分析</p><p data-v-28bf30fb>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div></div>',2)),t("div",X,[a[18]||(a[18]=l('<p class="ctitle" data-v-28bf30fb>Students</p><div class="ctext" data-v-28bf30fb><h1 data-v-28bf30fb>在读学生</h1><p data-v-28bf30fb>博士生：伍斯玥</p><p data-v-28bf30fb>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-28bf30fb><h1 data-v-28bf30fb>毕业学生</h1><p data-v-28bf30fb>赖新颖，华为</p><p data-v-28bf30fb>吕华彬，九维数据技术有限公司</p><p data-v-28bf30fb>袁楚杰，字节跳动</p><p data-v-28bf30fb>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-28bf30fb>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-28bf30fb>李密，招银网络科技有限公司</p><p data-v-28bf30fb>杜国良，广州凯媒通讯技术有限公司</p><p data-v-28bf30fb>吴亿欣，中国人寿保险股份有限公司</p><p data-v-28bf30fb>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-28bf30fb>吴松，读博（Utrecht University, Netherlands）</p><p data-v-28bf30fb>林俊杰，招银网络科技有限公司</p><p data-v-28bf30fb>陈萌，上海微创医疗机器人</p><p data-v-28bf30fb>詹金颖，华为</p><p data-v-28bf30fb>李昕宸，读博（深圳大学）</p><p data-v-28bf30fb>侯灿，建信金融科技公司</p><p data-v-28bf30fb>周豪，华为</p><p data-v-28bf30fb>罗德新，腾讯</p><p data-v-28bf30fb>朱艺，字节跳动，优秀毕业生</p></div>',2)),t("button",{class:"more",style:{display:"flex"},onClick:a[3]||(a[3]=g=>w(3))},a[17]||(a[17]=[p(" MORE "),t("img",{src:E,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])]),a[29]||(a[29]=t("div",{class:"book"},[t("p",{class:"booktitle"},"Books"),t("div",{class:"booktext"},[t("p",null,"《算法设计与分析实践案例解析》，清华大学出版社"),t("p",null,"《算法设计与分析》，清华大学出版社")])],-1)),a[30]||(a[30]=t("div",{id:"overlay",class:"overlay"},null,-1)),d.value===1?(i(),n("div",Y,[a[21]||(a[21]=t("p",{class:"titlebig"},"Course",-1)),a[22]||(a[22]=t("div",{class:"textbig"},[t("p",null,"Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)"),t("p",null,"Data Structures (Fall 2024-2019)"),t("p",null,"Big Data Processing and Analytics (Spring 2019)"),t("p",null,"Introdution to Big Data (Fall 2018-2017)"),t("p",null,"Information Retrieval (Spring 2018-2017)"),t("p",null,"Search Engine Technology (Fall 2016)")],-1)),t("button",{class:"fold",style:{display:"flex"},onClick:b},a[20]||(a[20]=[p(" FOLD "),t("img",{src:u,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),d.value===2?(i(),n("div",aa,[a[24]||(a[24]=t("p",{class:"titlebig"},"Awards",-1)),a[25]||(a[25]=t("div",{class:"textbig"},[t("p",null,"2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖"),t("p",null,"2023年广东省一流本科课程，算法设计与分析"),t("p",null,"2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践")],-1)),t("button",{class:"fold",style:{display:"flex"},onClick:b},a[23]||(a[23]=[p(" FOLD "),t("img",{src:u,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),d.value===3?(i(),n("div",ta,[a[27]||(a[27]=l('<p class="titlebig" data-v-28bf30fb>Students</p><div class="textbig" data-v-28bf30fb><h1 data-v-28bf30fb>在读学生</h1><p data-v-28bf30fb>博士生：伍斯玥</p><p data-v-28bf30fb>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-28bf30fb><h1 data-v-28bf30fb>毕业学生</h1><p data-v-28bf30fb>赖新颖，华为</p><p data-v-28bf30fb>吕华彬，九维数据技术有限公司</p><p data-v-28bf30fb>袁楚杰，字节跳动</p><p data-v-28bf30fb>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-28bf30fb>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-28bf30fb>李密，招银网络科技有限公司</p><p data-v-28bf30fb>杜国良，广州凯媒通讯技术有限公司</p><p data-v-28bf30fb>吴亿欣，中国人寿保险股份有限公司</p><p data-v-28bf30fb>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-28bf30fb>吴松，读博（Utrecht University, Netherlands）</p><p data-v-28bf30fb>林俊杰，招银网络科技有限公司</p><p data-v-28bf30fb>陈萌，上海微创医疗机器人</p><p data-v-28bf30fb>詹金颖，华为</p><p data-v-28bf30fb>李昕宸，读博（深圳大学）</p><p data-v-28bf30fb>侯灿，建信金融科技公司</p><p data-v-28bf30fb>周豪，华为</p><p data-v-28bf30fb>罗德新，腾讯</p><p data-v-28bf30fb>朱艺，字节跳动，优秀毕业生</p></div>',2)),t("button",{class:"fold",style:{display:"flex"},onClick:b},a[26]||(a[26]=[p(" FOLD "),t("img",{src:u,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0)]),a[33]||(a[33]=t("p",{class:"welcome"},"Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).",-1))])}}}),da=B(ea,[["__scopeId","data-v-28bf30fb"]]);export{da as default};
