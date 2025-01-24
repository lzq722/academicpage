import{_ as k,a as E,b,E as D,c as C,d as S,e as T,f as A,g as I,h as R}from"./CDw4GcZ6.js";import{_}from"./oydsBRgt.js";import{_ as K}from"./DlFjx_s6.js";import{d as P,r as y,v as n,x as l,E as o,y as a,A as t,B as h,C as p,F as r,G as f}from"./DaiirdvM.js";import{_ as B}from"./DlAUqK2U.js";const F={class:"bg"},U={class:"research"},J={class:"group"},L={style:{display:"flex",position:"relative"}},M={class:"image-container","data-text":"Click to view"},G={class:"image-container","data-text":"Click to view"},N={class:"group2"},j={style:{display:"flex"}},W={class:"image-container","data-text":"Click to view"},z={class:"image-container","data-text":"Click to view"},q={class:"achievement"},V={class:"achievements"},O={style:{display:"flex","flex-direction":"column",gap:"72px","margin-top":"80px"}},Z={key:0,class:"atext"},H={key:1,class:"atext"},$={key:2,class:"atext"},Q={class:"teaching"},X={class:"card"},Y={class:"tutorials"},ee={key:0,class:"coursebig"},ae={key:1,class:"coursebig"},te={key:2,class:"coursebig"},se=P({__name:"wu",setup(ie){const s=y(1),d=y(0),v=i=>{s.value=i},w=i=>{d.value=i,document.body.style.overflow="hidden";const e=document.getElementById("overlay");e&&(e.style.display="block")},g=()=>{d.value=0,document.body.style.overflow="auto";const i=document.getElementById("overlay");i&&(i.style.display="none")};return(i,e)=>{const c=D,m=R,x=C;return n(),l("div",F,[e[31]||(e[31]=o('<div class="top" data-v-91e4bee8><div class="topcontainer" data-v-91e4bee8><div class="tname" data-v-91e4bee8>Dingming Wu</div><div class="tintro" data-v-91e4bee8>Associate Professor<br data-v-91e4bee8>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-91e4bee8><img src="'+S+'" alt="" class="icon_address" data-v-91e4bee8><span class="locationtext" data-v-91e4bee8>Zhiteng Building 618-2</span></div><div class="temail" data-v-91e4bee8><img src="'+T+'" alt="" class="icon_email" data-v-91e4bee8><span class="emailtext" data-v-91e4bee8>dingming@szu.edu.cn</span></div><img src="'+K+'" alt="" class="teacherimg" data-v-91e4bee8></div></div><p class="text" data-v-91e4bee8> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p>',2)),a("div",U,[e[8]||(e[8]=o('<div class="rtitle" data-v-91e4bee8><img src="'+_+'" alt="" class="rellipse" data-v-91e4bee8><p class="title" data-v-91e4bee8>Research</p><div class="rline1" data-v-91e4bee8></div><div class="rline2" data-v-91e4bee8></div></div><p class="ri" data-v-91e4bee8>Research Interests</p><div class="rifield" data-v-91e4bee8><p class="ritext" data-v-91e4bee8> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-91e4bee8>Selected projects</p>',4)),a("div",J,[e[4]||(e[4]=a("p",{class:"gtitle"},"Efficient and Accurate PageRank Approximation on Large Graphs",-1)),e[5]||(e[5]=a("p",{class:"gintro"},"PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.",-1)),a("div",L,[a("div",M,[t(c,{src:"/academicpage/image/project1_1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project1_1.png"]})]),a("div",G,[t(c,{src:"/academicpage/image/project1_2.png",fit:"cover",alt:"",class:"gimg2","preview-src-list":["/academicpage/image/project1_2.png"]})])])]),a("div",N,[e[6]||(e[6]=a("p",{class:"gtitle"},"Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs",-1)),e[7]||(e[7]=a("p",{class:"gintro"},"Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.",-1)),a("div",j,[a("div",W,[t(c,{src:"/academicpage/image/project2_1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project2_1.png"]})]),a("div",z,[t(c,{src:"/academicpage/image/project2_2.png",fit:"cover",alt:"",class:"gimg2","preview-src-list":["/academicpage/image/project2_2.png"]})])])])]),a("div",q,[e[13]||(e[13]=a("img",{src:k,alt:"",class:"aellipse"},null,-1)),e[14]||(e[14]=a("p",{class:"atitle"},"Achievements",-1)),e[15]||(e[15]=a("div",{class:"aline1"},null,-1)),e[16]||(e[16]=a("div",{class:"aline2"},null,-1)),a("div",V,[t(x,null,{default:h(()=>[t(m,{span:2}),t(m,{span:8},{default:h(()=>[a("div",O,[a("button",{class:f(["abutton",{selecttab:s.value===1}]),onClick:e[0]||(e[0]=u=>v(1))},"Research Awards",2),a("button",{class:f(["abutton",{selecttab:s.value===2}]),onClick:e[1]||(e[1]=u=>v(2))},"Research Grants",2),a("button",{class:f(["abutton",{selecttab:s.value===3}]),onClick:e[2]||(e[2]=u=>v(3))},"Research Publications",2)]),e[9]||(e[9]=a("div",{class:"dblp"},[a("a",{href:"https://dblp.org/pid/81/6181.html",target:"_blank",style:{color:"#2F81FC"}},"[DBLP]"),p("  "),a("a",{href:"https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",target:"_blank",style:{color:"#2F81FC"}},"[Google Scholar]")],-1))]),_:1}),t(m,{span:12},{default:h(()=>[s.value===1?(n(),l("div",Z,e[10]||(e[10]=[a("p",null,"2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),a("p",null,"2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):r("",!0),s.value===2?(n(),l("div",H,e[11]||(e[11]=[a("p",null,"项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。",-1),a("p",null,"项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。",-1),a("p",null,"项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。",-1),a("p",null,"项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。",-1)]))):r("",!0),s.value===3?(n(),l("div",$,e[12]||(e[12]=[a("p",null,"Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)",-1),a("p",null,"Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)",-1),a("p",null,"Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)",-1),a("p",null,"Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),a("p",null,"Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)",-1),a("p",null,"Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):r("",!0)]),_:1})]),_:1})])]),e[32]||(e[32]=o('<div class="ps" data-v-91e4bee8><div class="pstitle" data-v-91e4bee8><img src="'+A+'" alt="" class="pellipse" data-v-91e4bee8><p class="ptitle" data-v-91e4bee8>Professional Services</p><div class="pline1" data-v-91e4bee8></div><div class="pline2" data-v-91e4bee8></div></div><table style="border-collapse:separate;border-spacing:0px 64px;" data-v-91e4bee8><tbody data-v-91e4bee8><tr data-v-91e4bee8><td class="tdtitle" data-v-91e4bee8>Journal Referee</td><td class="tdtext" data-v-91e4bee8><p data-v-91e4bee8>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-91e4bee8>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p></td></tr><tr data-v-91e4bee8><td class="tdtitle" data-v-91e4bee8>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-91e4bee8><p data-v-91e4bee8>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</p><p data-v-91e4bee8>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</p><p data-v-91e4bee8>AAAI Conference on Artificial Intelligence 2024, 2022</p><p data-v-91e4bee8>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p></td></tr></tbody><colgroup data-v-91e4bee8><col data-v-91e4bee8><col data-v-91e4bee8></colgroup></table></div>',1)),a("div",Q,[e[28]||(e[28]=o('<div class="teachingtitle" data-v-91e4bee8><img src="'+I+'" alt="" class="tellipse" data-v-91e4bee8><p class="ptitle" data-v-91e4bee8>Teaching</p><div class="pline1" data-v-91e4bee8></div><div class="pline2" data-v-91e4bee8></div></div>',1)),a("div",X,[e[19]||(e[19]=o('<div class="course" data-v-91e4bee8><p class="ctitle" data-v-91e4bee8>Courses</p><div class="ctext" data-v-91e4bee8><p data-v-91e4bee8>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-91e4bee8>Data Structures (Fall 2024-2019)</p><p data-v-91e4bee8>Big Data Processing and Analytics (Spring 2019)</p><p data-v-91e4bee8>Introdution to Big Data (Fall 2018-2017)</p><p data-v-91e4bee8>Information Retrieval (Spring 2018-2017)</p><p data-v-91e4bee8>Search Engine Technology (Fall 2016)</p></div></div><div class="at" data-v-91e4bee8><p class="ctitle" data-v-91e4bee8>Awards</p><div class="ctext" data-v-91e4bee8><p data-v-91e4bee8>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-91e4bee8>2023年广东省一流本科课程，算法设计与分析</p><p data-v-91e4bee8>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div></div>',2)),a("div",Y,[e[18]||(e[18]=o('<p class="ctitle" data-v-91e4bee8>Students</p><div class="ctext" data-v-91e4bee8><h1 data-v-91e4bee8>在读学生</h1><p data-v-91e4bee8>博士生：伍斯玥</p><p data-v-91e4bee8>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-91e4bee8><h1 data-v-91e4bee8>毕业学生</h1><p data-v-91e4bee8>赖新颖，华为</p><p data-v-91e4bee8>吕华彬，九维数据技术有限公司</p><p data-v-91e4bee8>袁楚杰，字节跳动</p><p data-v-91e4bee8>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-91e4bee8>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-91e4bee8>李密，招银网络科技有限公司</p><p data-v-91e4bee8>杜国良，广州凯媒通讯技术有限公司</p><p data-v-91e4bee8>吴亿欣，中国人寿保险股份有限公司</p><p data-v-91e4bee8>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-91e4bee8>吴松，读博（Utrecht University, Netherlands）</p><p data-v-91e4bee8>林俊杰，招银网络科技有限公司</p><p data-v-91e4bee8>陈萌，上海微创医疗机器人</p><p data-v-91e4bee8>詹金颖，华为</p><p data-v-91e4bee8>李昕宸，读博（深圳大学）</p><p data-v-91e4bee8>侯灿，建信金融科技公司</p><p data-v-91e4bee8>周豪，华为</p><p data-v-91e4bee8>罗德新，腾讯</p><p data-v-91e4bee8>朱艺，字节跳动，优秀毕业生</p></div>',2)),a("button",{class:"more",style:{display:"flex"},onClick:e[3]||(e[3]=u=>w(3))},e[17]||(e[17]=[p(" MORE "),a("img",{src:E,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])]),e[29]||(e[29]=a("div",{class:"book"},[a("p",{class:"booktitle"},"Books"),a("div",{class:"booktext"},[a("p",null,"《算法设计与分析实践案例解析》，清华大学出版社"),a("p",null,"《算法设计与分析》，清华大学出版社")])],-1)),e[30]||(e[30]=a("div",{id:"overlay",class:"overlay"},null,-1)),d.value===1?(n(),l("div",ee,[e[21]||(e[21]=a("p",{class:"titlebig"},"Course",-1)),e[22]||(e[22]=a("div",{class:"textbig"},[a("p",null,"Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)"),a("p",null,"Data Structures (Fall 2024-2019)"),a("p",null,"Big Data Processing and Analytics (Spring 2019)"),a("p",null,"Introdution to Big Data (Fall 2018-2017)"),a("p",null,"Information Retrieval (Spring 2018-2017)"),a("p",null,"Search Engine Technology (Fall 2016)")],-1)),a("button",{class:"fold",style:{display:"flex"},onClick:g},e[20]||(e[20]=[p(" FOLD "),a("img",{src:b,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),d.value===2?(n(),l("div",ae,[e[24]||(e[24]=a("p",{class:"titlebig"},"Awards",-1)),e[25]||(e[25]=a("div",{class:"textbig"},[a("p",null,"2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖"),a("p",null,"2023年广东省一流本科课程，算法设计与分析"),a("p",null,"2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践")],-1)),a("button",{class:"fold",style:{display:"flex"},onClick:g},e[23]||(e[23]=[p(" FOLD "),a("img",{src:b,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),d.value===3?(n(),l("div",te,[e[27]||(e[27]=o('<p class="titlebig" data-v-91e4bee8>Students</p><div class="textbig" data-v-91e4bee8><h1 data-v-91e4bee8>在读学生</h1><p data-v-91e4bee8>博士生：伍斯玥</p><p data-v-91e4bee8>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-91e4bee8><h1 data-v-91e4bee8>毕业学生</h1><p data-v-91e4bee8>赖新颖，华为</p><p data-v-91e4bee8>吕华彬，九维数据技术有限公司</p><p data-v-91e4bee8>袁楚杰，字节跳动</p><p data-v-91e4bee8>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-91e4bee8>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-91e4bee8>李密，招银网络科技有限公司</p><p data-v-91e4bee8>杜国良，广州凯媒通讯技术有限公司</p><p data-v-91e4bee8>吴亿欣，中国人寿保险股份有限公司</p><p data-v-91e4bee8>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-91e4bee8>吴松，读博（Utrecht University, Netherlands）</p><p data-v-91e4bee8>林俊杰，招银网络科技有限公司</p><p data-v-91e4bee8>陈萌，上海微创医疗机器人</p><p data-v-91e4bee8>詹金颖，华为</p><p data-v-91e4bee8>李昕宸，读博（深圳大学）</p><p data-v-91e4bee8>侯灿，建信金融科技公司</p><p data-v-91e4bee8>周豪，华为</p><p data-v-91e4bee8>罗德新，腾讯</p><p data-v-91e4bee8>朱艺，字节跳动，优秀毕业生</p></div>',2)),a("button",{class:"fold",style:{display:"flex"},onClick:g},e[26]||(e[26]=[p(" FOLD "),a("img",{src:b,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0)]),e[33]||(e[33]=a("p",{class:"welcome"},"Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).",-1))])}}}),pe=B(se,[["__scopeId","data-v-91e4bee8"]]);export{pe as default};
