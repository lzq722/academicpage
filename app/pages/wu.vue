<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="bg">
    <div class="top">
      <div class="topcontainer">
        <div class="tname">Dingming Wu</div>
        <div class="tintro">Associate Professor<br>College of Computer Science and Software Engineering Shenzhen University</div>
        <div class="tlocation">
          <img src="/image/icon_address.png" alt="" class="icon_address">
          <span class="locationtext">Zhiteng Building 618-2</span>
        </div>
        <div class="temail">
          <img src="/image/icon_email.png" alt="" class="icon_email">
          <span class="emailtext">dingming@szu.edu.cn</span>
        </div>
        <img src="/image/wu.png" alt="" class="teacherimg" />
      </div>
    </div>
    <p class="text">
      I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science & Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining.
    </p>
    <div class="research">
      <div class="rtitle">
        <img src="/image/pic_blue.png" alt="" class="rellipse">
        <p class="title">Research</p>
        <div class="rline1" />
        <div class="rline2" />
      </div>
      <p class="ri">Research Interests</p>
      <div class="rifield">
        <!-- <div class="rectangle1" /> -->
        <!-- <div class="rectangle2" /> -->
        <!-- <div class="rectangle3" /> -->
        <!-- <div class="rectangle4" /> -->
        <p class="ritext">
          My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining.
        </p>
      </div>
      <p class="Selected-projects">Selected projects</p>
      <div class="group">
        <p class="gtitle">Efficient and Accurate PageRank Approximation on Large Graphs</p>
        <p class="gintro">PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p>
        <div style="display: flex; position: relative;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/project1.png']"/>
          </div>
        </div>
      </div>
      <div class="group2">
        <p class="gtitle">Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs</p>
        <p class="gintro">Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p>
        <div style="display: flex;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project2_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/project2_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project2_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/project2_2.png']"/>
          </div>
        </div>
      </div>
      <!-- <div v-if="showGroup" class="group3">
        <p class="gtitle">Density-Based Top-K Spatial Textual Clusters Retrieval</p>
        <p class="gintro">So-called spatial web queries retrieve web content representing points of interest, such that the points of interest have descriptions that are relevant to query keywords and are located close to a query location. Two broad categories of such queries exist. The first encompasses queries that retrieve single spatial web objects that each satisfy the query arguments. Most proposals belong to this category. The second category, to which this paper's proposal belongs, encompasses queries that support exploratory user behavior and retrieve sets of objects that represent regions of space that may be of interest to the user. Specifically, the paper proposes a new type of query, the top-k spatial textual cluster retrieval (k-STC) query that returns the top-k clusters that (i) are located close to a query location, (ii) contain objects that are relevant with regard to given query keywords, and (iii) have an object density that exceeds a given threshold. To compute this query, we propose a DBSCAN-based approach and an OPTICS-based approach that rely on on-line density-based clustering and that exploit early stop conditions. Empirical studies on real data sets offer evidence that the paper's proposals can find good quality clusters and are capable of excellent performance.</p>
        <img src="/image/2.png" alt="" class="gimg1">
      </div>
      <p style="display: flex; margin-top: 24px; height: 30px; line-height: 30px; color: #2F81FC; font-weight: 400; font-size: 14px;">
        <button class="toggle-button" @click="toggleGroup" >
            {{ showGroup ? 'FOLD' : 'If you want to view more projects, please click MORE' }}
            <img v-if="showGroup" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
            <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
        </button>
      </p> -->
    </div>
    <div class="achievement">
      <img src="/image/pic_red.png" alt="" class="aellipse">
      <p class="atitle">Achievements</p>
      <div class="aline1" />
      <div class="aline2" />
      <div class="achievements">
        <el-row>
          <el-col :span="2" />
          <el-col :span="8">
            <div style="display: flex; flex-direction: column; gap: 72px; margin-top: 80px;">
              <button class="abutton" :class="{'selecttab': activetab === 1}" @click="setActiveTab(1)">Research Awards</button>
              <button class="abutton" :class="{'selecttab': activetab === 2}" @click="setActiveTab(2)">Research Grants</button>
              <button class="abutton" :class="{'selecttab': activetab === 3}" @click="setActiveTab(3)">Research Publications</button>
            </div>
            <div class="dblp">
              <a href="https://dblp.org/pid/81/6181.html" target="_blank" style="color: #2F81FC;">[DBLP]</a>&nbsp;
              <a href="https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en" target="_blank" style="color: #2F81FC;">[Google Scholar]</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div v-if="activetab === 1" class="atext">
              <p>2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p>
              <p>2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p>
            </div>
            <div v-if="activetab === 2" class="atext">
              <p>项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。</p>
              <p>项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。</p>
              <p>项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。</p>
              <p>项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。</p>
            </div>
            <div v-if="activetab === 3" class="atext">
              <p>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)</p>
              <p>Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)</p>
              <p>Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)</p>
              <p>Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p>
              <p>Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)</p>
              <p>Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ps">
      <div class="pstitle">
        <img src="/image/pic_green.png" alt="" class="pellipse">
        <p class="ptitle">Professional Services</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <table style="border-collapse:separate; border-spacing:0px 64px;">
        <tbody>
          <!-- <tr>
            <td class="tdtitle">Major Service Award</td>
            <td class="tdtext">
              <span>Outstanding Reviewer Award in IEEE International Conference on Data Engineering (ICDE) 2024</span>
            </td>
          </tr> -->
          <tr>
            <td class="tdtitle">Journal Referee</td>
            <td class="tdtext">
              <span>The International Journal on Very Large Data Bases (VLDBJ)</span><br>
              <span>IEEE Transactions on Knowledge and Data Engineering (TKDE)</span><br>
              <!-- <span v-if="showjr">111<br></span> -->
              <!-- <button class="showjrbutton" @click="showjrfun"> -->
                <!-- {{ showjr ? 'FOLD' : 'MORE'}} -->
                <!-- <img v-if="showjr" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;"> -->
                <!-- <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;"> -->
              <!-- </button> -->
            </td>
          </tr>
          <!-- <tr> -->
            <!-- <td class="tdtitle">Conference Program Organizer</td> -->
            <!-- <td class="tdtext"> -->
              <!-- <span>International Conference on Mobile Data Management (MDM) Year: 2021 to 2024 proceedings chair</span> -->
            <!-- </td> -->
          <!-- </tr> -->
          <tr>
            <td class="tdtitle">Conference Program Committee/Reviewer</td>
            <td class="tdtext">
              <span>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</span><br>
              <span>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</span><br>
              <span>AAAI Conference on Artificial Intelligence 2024, 2022</span><br>
              <span>International Joint Conference on Artificial Intelligence (IJCAI) 2021</span><br>
            </td>
          </tr>
          <!-- <tr> -->
            <!-- <td class="tdtitle">Conference Program Session Chair</td> -->
            <!-- <td class="tdtext"> -->
              <!-- <span>International Conference on Very Large Data Bases (VLDB) Year: 2020, 2022</span><br> -->
              <!-- <span>IEEE International Conference on Data Engineering (ICDE) Year: 2021, 2024</span><br> -->
              <!-- <span>International Joint Conference on Web and Big Data (APWeb-WAIM) Year: 2021</span><br> -->
              <!-- <span>International Conference on Web Information Systems Engineering (WISE) Year: 2021</span> -->
            <!-- </td> -->
          <!-- </tr> -->
        </tbody>
        <colgroup>
          <col>
          <col>
        </colgroup>
      </table>
    </div>
    <div class="teaching">
      <div class="teachingtitle">
        <img src="/image/pic_purple.png" alt="" class="tellipse">
        <p class="ptitle">Teaching</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <div class="card">
      <div class="course">
        <p class="ctitle">Courses</p>
        <div class="ctext">
          <p>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p>
          <p>Data Structures (Fall 2024-2019)</p>
          <p>Big Data Processing and Analytics (Spring 2019)</p>
          <p>Introdution to Big Data (Fall 2018-2017)</p>
          <p>Information Retrieval (Spring 2018-2017)</p>
          <p>Search Engine Technology (Fall 2016)</p>
        </div>
        <!-- <button class="more" style="display: flex;" @click="moreteaching(1)"> -->
          <!-- MORE -->
          <!-- <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;"> -->
        <!-- </button> -->
      </div>
      <div class="at">
        <p class="ctitle">Awards</p>
        <div class="ctext">
          <p>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p>
          <p>2023年广东省一流本科课程，算法设计与分析</p>
          <p>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p>
        </div>
        <!-- <button class="more" style="display: flex;" @click="moreteaching(2)"> -->
          <!-- MORE -->
          <!-- <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;"> -->
        <!-- </button> -->
      </div>
      <div class="tutorials">
        <p class="ctitle">Students</p>
        <div class="ctext">
          <h1>在读学生</h1>
          <p>博士生：伍斯玥</p>
          <p>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p>
          <br>
          <h1>毕业学生</h1>
          <p>赖新颖，华为</p>
          <p>吕华彬，九维数据技术有限公司</p>
          <p>袁楚杰，字节跳动</p>
          <p>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p>
          <p>朱思潼，公务员（国家税务总局广州市税务局）</p>
          <p>李密，招银网络科技有限公司</p>
          <p>杜国良，广州凯媒通讯技术有限公司</p>
          <p>吴亿欣，中国人寿保险股份有限公司</p>
          <p>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p>
          <p>吴松，读博（Utrecht University, Netherlands）</p>
          <p>林俊杰，招银网络科技有限公司</p>
          <p>陈萌，上海微创医疗机器人</p>
          <p>詹金颖，华为</p>
          <p>李昕宸，读博（深圳大学）</p>
          <p>侯灿，建信金融科技公司</p>
          <p>周豪，华为</p>
          <p>罗德新，腾讯</p>
          <p>朱艺，字节跳动，优秀毕业生</p>
        </div>
        <button class="more" style="display: flex;" @click="moreteaching(3)">
          MORE
          <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
    </div>
      <div class="book">
        <p class="booktitle">Books</p>
        <div class="booktext">
          <p>《算法设计与分析实践案例解析》，清华大学出版社</p>
          <p>《算法设计与分析》，清华大学出版社</p>
        </div>
      </div>
      <div id="overlay" class="overlay"></div>
      <div v-if="teachingcard === 1" class="coursebig">
        <p class="titlebig">Course</p>
        <div class="textbig">
          <p>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p>
          <p>Data Structures (Fall 2024-2019)</p>
          <p>Big Data Processing and Analytics (Spring 2019)</p>
          <p>Introdution to Big Data (Fall 2018-2017)</p>
          <p>Information Retrieval (Spring 2018-2017)</p>
          <p>Search Engine Technology (Fall 2016)</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 2" class="coursebig">
        <p class="titlebig">Awards</p>
        <div class="textbig">
          <p>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p>
          <p>2023年广东省一流本科课程，算法设计与分析</p>
          <p>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 3" class="coursebig">
        <p class="titlebig">Students</p>
        <div class="textbig">
          <h1>在读学生</h1>
          <p>博士生：伍斯玥</p>
          <p>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p>
          <br>
          <h1>毕业学生</h1>
          <p>赖新颖，华为</p>
          <p>吕华彬，九维数据技术有限公司</p>
          <p>袁楚杰，字节跳动</p>
          <p>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p>
          <p>朱思潼，公务员（国家税务总局广州市税务局）</p>
          <p>李密，招银网络科技有限公司</p>
          <p>杜国良，广州凯媒通讯技术有限公司</p>
          <p>吴亿欣，中国人寿保险股份有限公司</p>
          <p>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p>
          <p>吴松，读博（Utrecht University, Netherlands）</p>
          <p>林俊杰，招银网络科技有限公司</p>
          <p>陈萌，上海微创医疗机器人</p>
          <p>詹金颖，华为</p>
          <p>李昕宸，读博（深圳大学）</p>
          <p>侯灿，建信金融科技公司</p>
          <p>周豪，华为</p>
          <p>罗德新，腾讯</p>
          <p>朱艺，字节跳动，优秀毕业生</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
    </div>
    <!-- <div class="end">
      <p class="endtitle">How to be Productive in Research?</p>
      <p class="endtext">If you want to be productive in research, you need to read this document (by Prof. Dimitris Papadias in HKUST), read this Zhihu blog (written in Chinese), and watch this video (by Prof. Baochun Li in the University of Toronto).</p>
    </div> -->
    <p class="welcome">Welcome to the Database Group in Shenzhen University (SZU).</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '/d:/VS code/academicpage/app/assets/fonts/fonts.css';

// const showGroup = ref(false);
// const showjr = ref(false);
const activetab = ref(1);
const teachingcard = ref(0);

// function toggleGroup() {
//   showGroup.value = !showGroup.value;
// }

// function showjrfun() {
//   showjr.value = !showjr.value;
// }

const setActiveTab = (id: number) => {
  activetab.value = id;
};

const moreteaching = (id: number) => {
  teachingcard.value = id;
  document.body.style.overflow = 'hidden';
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = 'block';
  }
};

const foldteaching = () => {
  teachingcard.value = 0;
  document.body.style.overflow = 'auto';
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = 'none';
  }
};
</script>

<style scoped>
:global(body) {
  font-family: Inter, Inter;
  color: #000000;
  overflow-x: hidden;
}
.bg {
  width: 100%;
  /* height: 6558px; */
  background: #f1f7fa;
  border-radius: 0px 0px 0px 0px;
}
.top {
  position: relative;
  width: 100%;
  height: 460px;
  background: linear-gradient( 144deg, rgba(142,203,249,0.66) 0%, rgba(186,225,255,0.3) 80%, rgba(222,241,255,0) 100%);
  border-radius: 0px 0px 0px 0px;
  filter: blur(0px);
}
.topcontainer {
  position: relative;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}
.tname {
  position: absolute;
  top: 104px;
  height: 38px;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
}
.tintro {
  position: absolute;
  top: 170px;
  height: 59px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}
.tlocation {
  position: relative;
  top: 291px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.icon_address {
  position: absolute;
  width: 30px;
  height: 30px;
}
.locationtext {
  position: absolute;
  width: 300px;
  left: 46px;
}
.temail {
  position: relative;
  top: 309px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.icon_email {
  position: absolute;
  width: 30px;
  height: 30px;
}
.emailtext {
  position: absolute;
  width: 300px;
  left: 46px;
}
.teacherimg {
  position: absolute;
  top: 89px;
  right: 0;
  width: 276px;
  height: 276px;
  object-fit: cover;
  mask-image: radial-gradient(circle, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 71%);
}
.text {
  max-width: 1152px;
  /* height: 179px; */
  margin-top: 64px;
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.research {
  position: relative;
  max-width: 1152px;
  /* height: 1831px; */
  margin-left: auto;
  margin-right: auto;
}
.rtitle {
  position: absolute;
  top: 0;
  left: 0;
  width: 218px;
  height: 50px;
}
.rellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%); */
  /* border-radius: 50%; */
}
.title {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.rline1 {
  position: absolute;
  top: 42px;
  right: 0;
  width: 32px;
  border: 1px solid #000000;
}
.rline2 {
  position: absolute;
  top: 50px;
  right: 0;
  width: 118px;
  border: 1px solid #000000;
}
.ri {
  position: absolute;
  margin: 90px 0 0 0;
  height: 28px;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}
.rifield {
  position: absolute;
  margin-top: 162px;
  width: 100%;
  height: 119px;
}
/* .rectangle1 {
  position: absolute;
  margin: 10px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle2 {
  position: absolute;
  margin: 40px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle3 {
  position: absolute;
  margin: 70px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle4 {
  position: absolute;
  margin: 100px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
} */
.ritext {
  position: absolute;
  max-width: 100%;
  /* margin: 0 0 0 32px; */
  /* height: 119px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.Long-Term-Goal {
  position: absolute;
  margin: 285px 0 0 0;
  height: 28px;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}
.ltgtext {
  position: absolute;
  margin: 337px 0 0 0;
  height: 89px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.Selected-projects {
  position: absolute;
  margin: 285px 0 0 0;
  height: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
}
.sptext {
  position: absolute;
  margin: 498px 0 0 0;
  height: 59px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.group {
  position: relative;
  top: 337px;
  width: 100%;
  /* height: 586px; */
}
.gtitle {
  height: 29px;
  font-weight: 600;
  font-size: 16px;
  color: #2F81FC;
  line-height: 30px;
}
.gintro {
  margin: 24px 0 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.image-container::before {
  position: absolute;
  margin-top: 24px;
  content: attr(data-text); 
  background: rgba(0, 0, 0, 0.5);
  width: 373px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  opacity: 0; 
  transition: opacity 0.3s ease;
  border-radius: 16px 16px 16px 16px;
  z-index: 999;
  pointer-events: none;
}

.image-container:hover::before {
  opacity: 1;
}
.gimg1 {
  margin-top: 24px;
  left: 0;
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.gimg2 {
  margin-top: 24px;
  margin-left: 2%;
  /* transform: translateX(-50%); */
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.gimg3 {
  margin-top: 24px;
  margin-left: 2%;
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.group2 {
  position: relative;
  margin: 361px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.group3 {
  position: relative;
  margin: 24px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.toggle-button {
  /* position: relative; */
  display: flex;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #2F81FC;
}
.achievement {
  position: relative;
  margin-top: 80px;
  max-width: 1152px;
  height: 735px;
  margin-left: auto;
  margin-right: auto;
}
.aellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #F59191 100%); */
  /* border-radius: 50%; */
}
.atitle {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.aline1 {
  position: absolute;
  top: 42px;
  left: 275px;
  width: 32px;
  border: 1px solid #000000;
}
.aline2 {
  position: absolute;
  top: 50px;
  left: 189px;
  width: 118px;
  border: 1px solid #000000;
}
.achievements {
  position: absolute;
  top: 91px;
  width: 100%;
  height: 644px;
  background: rgba(196,196,196,0);
  border-radius: 16px 16px 16px 16px;
  border: 4px solid #000000;
}
.abutton {
  margin-left: 0;
  width: 271px;
  height: 64px;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  border-radius: 32px 32px 32px 32px;
  border: 0;
}
.abutton:hover {
  color: #000000;
  background: #FFFFFF;
  border-radius: 32px 32px 32px 32px;
  /* border: 4px solid rgba(0,0,0,0); */
  cursor: pointer;
}
.selecttab {
  color: #000000 !important;
  background: #FFFFFF !important;
  border-radius: 32px 32px 32px 32px;
  border: 4px solid #000000 !important;
}
.dblp {
  width: 271px;
  margin-top: 119px;
  height: 29px;
  font-weight: 600;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
  text-align: center;
}
.atext {
  margin-top: 80px;
  height: 492px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) rgba(0,0,0,0);
  
}
.atext p::before {
  content: '· ';
  margin-left: -0.6em;
}
.atext p {
  padding-left: 1em;
  text-indent: 0;
}
.ps {
  position: relative;
  margin-top: 80px;
  max-width: 1152px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
}
.pstitle {
  position: relative;
  margin-top: 80px;
  width: 422px;
  height: 100px;
}
.pellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #6FBD79 100%); */
  /* border-radius: 50%; */
}
.ptitle {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.pline1 {
  position: absolute;
  top: 42px;
  right: 0;
  width: 32px;
  border: 1px solid #000000;
}
.pline2 {
  position: absolute;
  top: 50px;
  right: 0;
  width: 118px;
  border: 1px solid #000000;
}
.pscontainer {
  position: relative;
  margin-top: 80px;
  width: 100%;
  /* height: 100px; */
}
tr {
  margin-bottom: 64px;
}
td span::before {
  content: '· ';
}
td span {
  text-indent: -1em;
}
.showjrbutton {
  display: flex;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.tdtitle {
  vertical-align: top;
  width: 42%;
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  color: #2F81FC;
  line-height: 30px;
}
.tdtext {
  vertical-align: top;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.teaching {
  position: relative;
  margin-top: 40px;
  max-width: 1152px;
  /* height: 645px; */
  margin-left: auto;
  margin-right: auto;
}
.teachingtitle {
  position: relative;
  width: 227px;
  height: 51px;
}
.tellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #B573FF 100%); */
  /* border-radius: 50%; */
}
.card {
  position: relative;
  width: 100%;
  height: 594px;
}
.course {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  left: 0;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.ctitle {
  margin-top: 40px;
  margin-left: 40px;
  height: 36px;
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.ctext {
  margin-top: 40px;
  margin-inline: 40px;
  height: 356px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
}
.ctext h1 {
  font-weight: bold;
  /* font-size: 20px; */
  /* line-height: 28px; */
}
.ctext p::before {
  content: '· ';
  margin-left: -0.6em;
}
.ctext p {
  padding-left: 1em;
}
.at {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  left: 34%;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.tutorials {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  right: 0;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.book {
  /* position: absolute; */
  width: 100%;
  margin-top: 16px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.booktitle {
  padding-top: 40px;
  margin-left: 40px;
  /* height: 36px; */
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.booktext {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-inline: 40px;
  /* height: 356px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.overlay {
  display: none;  /* 默认隐藏 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 999;  /* 确保遮罩层在内容层之上 */
}
.coursebig {
  /* display: block; */
  position: fixed;
  width: 83%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin-top: 40px; */
  /* min-height: 554px; */
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  z-index: 1000;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) rgba(0,0,0,0);
}
.titlebig {
  padding-top: 40px;
  margin-left: 40px;
  /* height: 36px; */
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.textbig {
  padding-top: 40px;
  margin-inline: 40px;
  /* height: 356px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.textbig h1 {
  font-weight: bold;
  /* font-size: 20px; */
  /* line-height: 28px; */
}
.textbig p::before {
  content: '· ';
  margin-left: -0.6em;
}
.textbig p {
  padding-left: 1em;
}
.more {
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.fold {
  /* position: absolute; */
  margin-top: 28px;
  margin-left: 85%;
  padding-bottom: 24px;
  /* height: 30px; */
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
/* .end {
  position: relative;
  margin-top: 40px;
  max-width: 1152px;
  height: 299px;
  background: rgba(196,196,196,0);
  border-radius: 16px 16px 16px 16px;
  border: 4px solid #000000;
  margin-left: auto;
  margin-right: auto;
}
.endtitle {
  margin-top: 80px;
  text-align: center;
  height: 32px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-decoration-line: underline;
}
.endtext {
  margin-top: 40px;
  margin-inline: 72px;
  height: 59px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
} */
.welcome {
  margin-top: 80px;
  text-align: center;
  height: 15px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  line-height: 14px;
}
</style>