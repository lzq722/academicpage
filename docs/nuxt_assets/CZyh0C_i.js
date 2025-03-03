import{_ as E,a as f,b as y,E as D,c as C,d as S,e as T,f as R,g as A,h as I}from"./UbdrEuH-.js";import{_ as P}from"./DQeaV7x8.js";import{_ as K}from"./DBWgv55a.js";import{d as B,r as w,x as s,E as p,y as a,A as i,B as x,C as o,F as r,v as n,G as c}from"./DcgPqiZd.js";import{_}from"./DlAUqK2U.js";const F={class:"bg"},L={class:"research"},M={class:"group"},U={style:{display:"flex",position:"relative"},class:"gimgs"},J={class:"image-container","data-text":"Click to view"},Z={class:"image-container","data-text":"Click to view"},G={class:"group2"},N={style:{display:"flex"},class:"gimgs"},j={class:"image-container","data-text":"Click to view"},W={class:"image-container","data-text":"Click to view"},z={class:"achievement"},O={class:"achievements"},q={class:"abuttons"},V={key:0,class:"atext"},$={key:1,class:"atext"},H={key:2,class:"atext"},Q={key:3,class:"atext"},X={class:"teaching"},Y={class:"card"},aa={class:"course"},ta={class:"at"},ea={class:"tutorials"},sa={key:0,class:"coursebig"},ia={key:1,class:"coursebig"},na={key:2,class:"coursebig"},la=B({__name:"wu",setup(oa){const e=w(1),b=w(0),v=l=>{e.value=l},u=l=>{b.value=l,document.body.style.overflow="hidden";const t=document.getElementById("overlay");t&&(t.style.display="block")},m=()=>{b.value=0,document.body.style.overflow="auto";const l=document.getElementById("overlay");l&&(l.style.display="none")};return(l,t)=>{const g=A,h=I,k=D;return n(),s("div",F,[t[40]||(t[40]=p('<div class="top" data-v-79968bba><div class="topcontainer" data-v-79968bba><div class="tname" data-v-79968bba>Dingming Wu</div><div class="tintro" data-v-79968bba>Associate Professor<br data-v-79968bba>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-79968bba><img src="'+C+'" alt="" class="icon_address" data-v-79968bba><span class="locationtext" data-v-79968bba>Zhiteng Building 618-2</span></div><div class="temail" data-v-79968bba><img src="'+S+'" alt="" class="icon_email" data-v-79968bba><span class="emailtext" data-v-79968bba>dingming@szu.edu.cn</span></div><img src="'+K+'" alt="" class="teacherimg" data-v-79968bba></div></div><p class="text" data-v-79968bba> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p>',2)),a("div",L,[t[11]||(t[11]=p('<div class="rtitle" data-v-79968bba><img src="'+P+'" alt="" class="rellipse" data-v-79968bba><p class="title" data-v-79968bba>Research</p><div class="rline1" data-v-79968bba></div><div class="rline2" data-v-79968bba></div></div><p class="ri" data-v-79968bba>Research Interests</p><div class="rifield" data-v-79968bba><p class="ritext" data-v-79968bba> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-79968bba>Selected projects</p>',4)),a("div",M,[t[7]||(t[7]=a("p",{class:"gtitle"},"Efficient and Accurate PageRank Approximation on Large Graphs",-1)),t[8]||(t[8]=a("p",{class:"gintro"},"PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.",-1)),a("div",U,[a("div",J,[i(g,{src:"/academicpage/image/project1_1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project1_1.png"]})]),a("div",Z,[i(g,{src:"/academicpage/image/project1_2.png",fit:"cover",alt:"",class:"gimg2","preview-src-list":["/academicpage/image/project1_2.png"]})])])]),a("div",G,[t[9]||(t[9]=a("p",{class:"gtitle"},"Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs",-1)),t[10]||(t[10]=a("p",{class:"gintro"},"Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.",-1)),a("div",N,[a("div",j,[i(g,{src:"/academicpage/image/project2_1.png",fit:"cover",alt:"",class:"gimg1","preview-src-list":["/academicpage/image/project2_1.png"]})]),a("div",W,[i(g,{src:"/academicpage/image/project2_2.png",fit:"cover",alt:"",class:"gimg2","preview-src-list":["/academicpage/image/project2_2.png"]})])])])]),a("div",z,[t[17]||(t[17]=a("img",{src:E,alt:"",class:"aellipse"},null,-1)),t[18]||(t[18]=a("p",{class:"atitle"},"Achievements",-1)),t[19]||(t[19]=a("div",{class:"aline1"},null,-1)),t[20]||(t[20]=a("div",{class:"aline2"},null,-1)),a("div",O,[i(k,null,{default:x(()=>[i(h,{span:2,xs:0}),i(h,{span:8,xs:24},{default:x(()=>[a("div",q,[a("button",{class:c(["abutton",{selecttab:e.value===1}]),onClick:t[0]||(t[0]=d=>v(1))},"Research Awards",2),a("button",{class:c(["abutton",{selecttab:e.value===2}]),onClick:t[1]||(t[1]=d=>v(2))},"Research Grants",2),a("button",{class:c(["abutton",{selecttab:e.value===3}]),onClick:t[2]||(t[2]=d=>v(3))},"Research Publications",2),a("button",{class:c(["abutton",{selecttab:e.value===4}]),onClick:t[3]||(t[3]=d=>v(4))},"Patents",2)]),t[12]||(t[12]=a("div",{class:"dblp"},[a("a",{href:"https://dblp.org/pid/81/6181.html",target:"_blank",style:{color:"#2F81FC"}},"[DBLP]"),o("  "),a("a",{href:"https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",target:"_blank",style:{color:"#2F81FC"}},"[Google Scholar]")],-1))]),_:1}),i(h,{span:12,xs:24},{default:x(()=>[e.value===1?(n(),s("div",V,t[13]||(t[13]=[a("p",null,"2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),a("p",null,"2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):r("",!0),e.value===2?(n(),s("div",$,t[14]||(t[14]=[a("p",null,"项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。",-1),a("p",null,"项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。",-1),a("p",null,"项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。",-1),a("p",null,"项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。",-1)]))):r("",!0),e.value===3?(n(),s("div",H,t[15]||(t[15]=[a("p",null,"Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)",-1),a("p",null,"Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)",-1),a("p",null,"Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)",-1),a("p",null,"Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)",-1),a("p",null,"Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)",-1),a("p",null,"Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)",-1)]))):r("",!0),e.value===4?(n(),s("div",Q,t[16]||(t[16]=[a("p",null,"发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11",-1),a("p",null,"发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28",-1),a("p",null,"发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20",-1),a("p",null,"发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17",-1),a("p",null,"发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06",-1),a("p",null,"发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04",-1)]))):r("",!0)]),_:1})]),_:1})])]),t[41]||(t[41]=p('<div class="ps" data-v-79968bba><div class="pstitle" data-v-79968bba><img src="'+T+'" alt="" class="pellipse" data-v-79968bba><p class="ptitle" data-v-79968bba>Professional Services</p><div class="pline1" data-v-79968bba></div><div class="pline2" data-v-79968bba></div></div><table style="border-collapse:separate;border-spacing:0px 24px;" data-v-79968bba><tbody data-v-79968bba><tr data-v-79968bba><td class="tdtitle" data-v-79968bba>Journal Referee</td><td class="tdtext" data-v-79968bba><p data-v-79968bba>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-79968bba>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p></td></tr><tr data-v-79968bba><td class="tdtitle" data-v-79968bba>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-79968bba><p data-v-79968bba>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</p><p data-v-79968bba>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</p><p data-v-79968bba>AAAI Conference on Artificial Intelligence 2024, 2022</p><p data-v-79968bba>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p></td></tr></tbody><colgroup data-v-79968bba><col data-v-79968bba><col data-v-79968bba></colgroup></table></div>',1)),a("div",X,[t[37]||(t[37]=p('<div class="teachingtitle" data-v-79968bba><img src="'+R+'" alt="" class="tellipse" data-v-79968bba><p class="ptitle" data-v-79968bba>Teaching</p><div class="pline1" data-v-79968bba></div><div class="pline2" data-v-79968bba></div></div>',1)),a("div",Y,[a("div",aa,[t[22]||(t[22]=a("p",{class:"ctitle"},"Courses",-1)),t[23]||(t[23]=a("div",{class:"ctext"},[a("p",null,"Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)"),a("p",null,"Data Structures (Fall 2024-2019)"),a("p",null,"Big Data Processing and Analytics (Spring 2019)"),a("p",null,"Introdution to Big Data (Fall 2018-2017)"),a("p",null,"Information Retrieval (Spring 2018-2017)"),a("p",null,"Search Engine Technology (Fall 2016)")],-1)),a("button",{class:"more1",style:{display:"flex"},onClick:t[4]||(t[4]=d=>u(1))},t[21]||(t[21]=[o(" MORE "),a("img",{src:f,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))]),a("div",ta,[t[25]||(t[25]=a("p",{class:"ctitle"},"Awards",-1)),t[26]||(t[26]=a("div",{class:"ctext"},[a("p",null,"2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖"),a("p",null,"2023年广东省一流本科课程，算法设计与分析"),a("p",null,"2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践")],-1)),a("button",{class:"more2",style:{display:"flex"},onClick:t[5]||(t[5]=d=>u(2))},t[24]||(t[24]=[o(" MORE "),a("img",{src:f,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))]),a("div",ea,[t[28]||(t[28]=p('<p class="ctitle" data-v-79968bba>Students</p><div class="ctext" data-v-79968bba><h1 data-v-79968bba>在读学生</h1><p data-v-79968bba>博士生：伍斯玥</p><p data-v-79968bba>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-79968bba><h1 data-v-79968bba>毕业学生</h1><p data-v-79968bba>赖新颖，华为</p><p data-v-79968bba>吕华彬，九维数据技术有限公司</p><p data-v-79968bba>袁楚杰，字节跳动</p><p data-v-79968bba>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-79968bba>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-79968bba>李密，招银网络科技有限公司</p><p data-v-79968bba>杜国良，广州凯媒通讯技术有限公司</p><p data-v-79968bba>吴亿欣，中国人寿保险股份有限公司</p><p data-v-79968bba>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-79968bba>吴松，读博（Utrecht University, Netherlands）</p><p data-v-79968bba>林俊杰，招银网络科技有限公司</p><p data-v-79968bba>陈萌，上海微创医疗机器人</p><p data-v-79968bba>詹金颖，华为</p><p data-v-79968bba>李昕宸，读博（深圳大学）</p><p data-v-79968bba>侯灿，建信金融科技公司</p><p data-v-79968bba>周豪，华为</p><p data-v-79968bba>罗德新，腾讯</p><p data-v-79968bba>朱艺，字节跳动，优秀毕业生</p></div>',2)),a("button",{class:"more3",style:{display:"flex"},onClick:t[6]||(t[6]=d=>u(3))},t[27]||(t[27]=[o(" MORE "),a("img",{src:f,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])]),t[38]||(t[38]=a("div",{class:"book"},[a("p",{class:"booktitle"},"Books"),a("div",{class:"booktext"},[a("p",null,"《算法设计与分析实践案例解析》，清华大学出版社"),a("p",null,"《算法设计与分析》，清华大学出版社")])],-1)),t[39]||(t[39]=a("div",{id:"overlay",class:"overlay"},null,-1)),b.value===1?(n(),s("div",sa,[t[30]||(t[30]=a("p",{class:"titlebig"},"Course",-1)),t[31]||(t[31]=a("div",{class:"textbig"},[a("p",null,"Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)"),a("p",null,"Data Structures (Fall 2024-2019)"),a("p",null,"Big Data Processing and Analytics (Spring 2019)"),a("p",null,"Introdution to Big Data (Fall 2018-2017)"),a("p",null,"Information Retrieval (Spring 2018-2017)"),a("p",null,"Search Engine Technology (Fall 2016)")],-1)),a("button",{class:"fold",style:{display:"flex"},onClick:m},t[29]||(t[29]=[o(" FOLD "),a("img",{src:y,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),b.value===2?(n(),s("div",ia,[t[33]||(t[33]=a("p",{class:"titlebig"},"Awards",-1)),t[34]||(t[34]=a("div",{class:"textbig"},[a("p",null,"2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖"),a("p",null,"2023年广东省一流本科课程，算法设计与分析"),a("p",null,"2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践")],-1)),a("button",{class:"fold",style:{display:"flex"},onClick:m},t[32]||(t[32]=[o(" FOLD "),a("img",{src:y,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0),b.value===3?(n(),s("div",na,[t[36]||(t[36]=p('<p class="titlebig" data-v-79968bba>Students</p><div class="textbig" data-v-79968bba><h1 data-v-79968bba>在读学生</h1><p data-v-79968bba>博士生：伍斯玥</p><p data-v-79968bba>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-79968bba><h1 data-v-79968bba>毕业学生</h1><p data-v-79968bba>赖新颖，华为</p><p data-v-79968bba>吕华彬，九维数据技术有限公司</p><p data-v-79968bba>袁楚杰，字节跳动</p><p data-v-79968bba>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-79968bba>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-79968bba>李密，招银网络科技有限公司</p><p data-v-79968bba>杜国良，广州凯媒通讯技术有限公司</p><p data-v-79968bba>吴亿欣，中国人寿保险股份有限公司</p><p data-v-79968bba>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-79968bba>吴松，读博（Utrecht University, Netherlands）</p><p data-v-79968bba>林俊杰，招银网络科技有限公司</p><p data-v-79968bba>陈萌，上海微创医疗机器人</p><p data-v-79968bba>詹金颖，华为</p><p data-v-79968bba>李昕宸，读博（深圳大学）</p><p data-v-79968bba>侯灿，建信金融科技公司</p><p data-v-79968bba>周豪，华为</p><p data-v-79968bba>罗德新，腾讯</p><p data-v-79968bba>朱艺，字节跳动，优秀毕业生</p></div>',2)),a("button",{class:"fold",style:{display:"flex"},onClick:m},t[35]||(t[35]=[o(" FOLD "),a("img",{src:y,alt:"",style:{width:"10px",height:"10px","margin-left":"6px","margin-top":"11px"}},null,-1)]))])):r("",!0)]),t[42]||(t[42]=a("p",{class:"welcome"},"Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).",-1))])}}}),ga=_(la,[["__scopeId","data-v-79968bba"]]);export{ga as default};
