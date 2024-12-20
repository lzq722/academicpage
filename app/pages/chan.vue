<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="bg">
    <div class="top">
      <div class="tname">Prof. Tsz Nam Chan</div>
      <div class="tintro">Distinguished Professor<br>College of Computer Science and Software Engineering Shenzhen University</div>
      <div class="tlocation">
        <el-icon size="23"><Location /></el-icon>
        Zhiteng Building 618-3
      </div>
      <div class="temail">
        <el-icon size="23"><Paperclip /></el-icon>
        edisonchan2013928@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disonchan@szu.edu.cn
      </div>
      <img :src="`/image/2.png`" alt="" class="teacherimg" />
    </div>
    <p class="text">
      Tsz Nam Chan (Edison) is currently a Distinguished Professor 
      in the database group of the Big Data Institude in Shenzhen 
      University (SZU). He is a data engineering researcher (for 
      handling the efficiency issues in big data settings). He published 
      several research papers in prestigious conferences and journals 
      (CCF: A, top ranking in Google scholar and Microsoft) in both 
      database (data engineering) and data mining areas, including 
      SIGMOD, VLDB, ICDE, SIGKDD, and TKDE. Prior to joining the SZU, 
      he was a Research Assistant Professor in the Hong Kong Baptist 
      University from Sep 2020 to Aug 2023 and a postdoctoral researcher 
      in the The University of Hong Kong from Sep 2018 to Aug 2020. He 
      received the PhD degree in computing and the BEng degree in electronic 
      and information engineering from The Hong Kong Polytechnic University 
      in 2019 and 2014, respectively. He is an IEEE senior member, an ACM member, and an AAAI member.</p>
    <div class="research">
      <div class="rtitle">
        <div class="rellipse" />
        <p class="title">Research</p>
        <div class="rline1" />
        <div class="rline2" />
      </div>
      <p class="ri">Research Interests</p>
      <div class="rifield">
        <div class="rectangle1" />
        <div class="rectangle2" />
        <div class="rectangle3" />
        <div class="rectangle4" />
        <p class="ritext">
          Algorithm and software development for statistical models (with non-trivial accuracy and time complexity guarantees)<br>
          Spatial and temporal data analysis/management (develop efficient algorithms for GIS)<br>
          Large-scale data visualization<br>
          Kernel methods, similarity measures, similarity search, and pattern matching
        </p>
      </div>
      <p class="Long-Term-Goal">Long-Term Goal</p>
      <p class="ltgtext">
        My long-term goal aims to develop the GIS, visualization, 
        statistical, and machine learning software packages, like QGIS, ArcGIS, CrimeStat, 
        Seaborn, Scikit-learn, Scipy, and LIBSVM, which are based on our theoretically 
        efficient algorithms (e.g., reduce the time complexity) with non-trivial accuracy guarantees 
        (e.g., achieve exact results or approximate results with approximation ratio). With the lower 
        time complexity of our solutions, our software packages should be the fastest in the world.
      </p>
      <p class="Selected-projects">Selected projects</p>
      <p class="sptext">
        My general research area is data management. Recently, much of my research concerns problems 
        from geo-textual, geo-social network, and knowledge graph data, including data modeling, query 
        languages, query processing, data mining, and indexing.
      </p>
      <div class="group">
        <p class="gtitle">Density-Based Top-K Spatial Textual Clusters Retrieval</p>
        <p class="gintro">So-called spatial web queries retrieve web content representing points of interest, such that the points of interest have descriptions that are relevant to query keywords and are located close to a query location. Two broad categories of such queries exist. The first encompasses queries that retrieve single spatial web objects that each satisfy the query arguments. Most proposals belong to this category. The second category, to which this paper's proposal belongs, encompasses queries that support exploratory user behavior and retrieve sets of objects that represent regions of space that may be of interest to the user. Specifically, the paper proposes a new type of query, the top-k spatial textual cluster retrieval (k-STC) query that returns the top-k clusters that (i) are located close to a query location, (ii) contain objects that are relevant with regard to given query keywords, and (iii) have an object density that exceeds a given threshold. To compute this query, we propose a DBSCAN-based approach and an OPTICS-based approach that rely on on-line density-based clustering and that exploit early stop conditions. Empirical studies on real data sets offer evidence that the paper's proposals can find good quality clusters and are capable of excellent performance.</p>
        <img :src="`/image/1.png`" alt="" class="gimg1">
        <img :src="`/image/1.png`" alt="" class="gimg2">
        <img :src="`/image/1.png`" alt="" class="gimg3">
      </div>
      <div class="group2">
        <p class="gtitle">Density-Based Top-K Spatial Textual Clusters Retrieval</p>
        <p class="gintro">So-called spatial web queries retrieve web content representing points of interest, such that the points of interest have descriptions that are relevant to query keywords and are located close to a query location. Two broad categories of such queries exist. The first encompasses queries that retrieve single spatial web objects that each satisfy the query arguments. Most proposals belong to this category. The second category, to which this paper's proposal belongs, encompasses queries that support exploratory user behavior and retrieve sets of objects that represent regions of space that may be of interest to the user. Specifically, the paper proposes a new type of query, the top-k spatial textual cluster retrieval (k-STC) query that returns the top-k clusters that (i) are located close to a query location, (ii) contain objects that are relevant with regard to given query keywords, and (iii) have an object density that exceeds a given threshold. To compute this query, we propose a DBSCAN-based approach and an OPTICS-based approach that rely on on-line density-based clustering and that exploit early stop conditions. Empirical studies on real data sets offer evidence that the paper's proposals can find good quality clusters and are capable of excellent performance.</p>
        <img :src="`/image/2.png`" alt="" class="gimg1">
      </div>
      <div v-if="showGroup2" class="group3">
        <p class="gtitle">Density-Based Top-K Spatial Textual Clusters Retrieval</p>
        <p class="gintro">So-called spatial web queries retrieve web content representing points of interest, such that the points of interest have descriptions that are relevant to query keywords and are located close to a query location. Two broad categories of such queries exist. The first encompasses queries that retrieve single spatial web objects that each satisfy the query arguments. Most proposals belong to this category. The second category, to which this paper's proposal belongs, encompasses queries that support exploratory user behavior and retrieve sets of objects that represent regions of space that may be of interest to the user. Specifically, the paper proposes a new type of query, the top-k spatial textual cluster retrieval (k-STC) query that returns the top-k clusters that (i) are located close to a query location, (ii) contain objects that are relevant with regard to given query keywords, and (iii) have an object density that exceeds a given threshold. To compute this query, we propose a DBSCAN-based approach and an OPTICS-based approach that rely on on-line density-based clustering and that exploit early stop conditions. Empirical studies on real data sets offer evidence that the paper's proposals can find good quality clusters and are capable of excellent performance.</p>
        <img :src="`/image/2.png`" alt="" class="gimg1">
      </div>
      <p style="display: flex; margin-top: 24px; height: 30px; line-height: 30px; color: #2F81FC; font-weight: 400; font-size: 14px;">
        If you want to view more projects, please click
        <button class="toggle-button" @click="toggleGroup2" >
          &nbsp;{{ showGroup2 ? 'LESS ⬆' : 'MORE ⬇' }}
        </button>
      </p>
    </div>
    <div class="achievement">
      <div class="aellipse" />
      <p class="atitle">Achievements</p>
      <div class="aline1" />
      <div class="aline2" />
      <div class="achievements">
        <el-row>
          <el-col :span="2" />
          <el-col :span="8">
            <div style="display: flex; flex-direction: column; gap: 72px; margin-top: 80px;">
              <el-button class="abutton" :class="{'selecttab': activetab === 1}" @click="setActiveTab(1)">Research Awards</el-button>
              <el-button class="abutton" :class="{'selecttab': activetab === 2}" @click="setActiveTab(2)">Research Grants</el-button>
              <el-button class="abutton" :class="{'selecttab': activetab === 3}" @click="setActiveTab(3)">Research Publications</el-button>
            </div>
            <div class="dblp">[DBLP] [Google Scholar]</div>
          </el-col>
          <!-- <el-col :span="1" /> -->
          <el-col :span="12">
            <div v-if="activetab === 1" class="atext">
              <p>PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB</p>
              <p>PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB</p>
              <p>PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB</p>
              <p>PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB</p>
              <p>PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB</p>
              <p>PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB</p>
              <p>PI: HKBU Internal Grant, 100,000 HKD</p>
              <p>PI: HKBU Start-up Grant, 120,000 HKD</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div v-if="activetab === 2" class="atext">
              <p>PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB</p>
              <p>PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB</p>
              <p>PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB</p>
              <p>PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB</p>
              <p>PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB</p>
              <p>PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB</p>
              <p>PI: HKBU Internal Grant, 100,000 HKD</p>
            </div>
            <div v-if="activetab === 3" class="atext">
              <p>PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB</p>
              <p>PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB</p>
              <p>PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB</p>
              <p>PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB</p>
              <p>PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB</p>
              <p>PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ps">
      <div class="pstitle">
        <div class="pellipse" />
        <p class="ptitle">Professional Services</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <table style="border-collapse:separate; border-spacing:0px 64px;">
        <tbody>
          <tr>
            <td class="tdtitle">Major Service Award</td>
            <td class="tdtext">
              <span>Outstanding Reviewer Award in IEEE International Conference on Data Engineering (ICDE) 2024</span>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Journal Referee</td>
            <td class="tdtext">
              <span>The International Journal on Very Large Data Bases (VLDBJ)</span><br>
              <span>IEEE Transactions on Knowledge and Data Engineering (TKDE)</span><br>
              <span>Artificial Intelligence Journal (AIJ)</span><br>
              <span>IEEE Transactions on Computers (TC)</span><br>
              <span>World Wide Web Journal (WWWJ)</span><br>
              <span v-if="showjr">111<br></span>
              <button class="showjrbutton" @click="showjrfun">{{ showjr ? 'FOLD' : 'MORE'}}</button>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Conference Program Organizer</td>
            <td class="tdtext">
              <span>International Conference on Mobile Data Management (MDM) Year: 2021 to 2024 proceedings chair</span>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Conference Program Committee/Reviewer</td>
            <td class="tdtext">
              <span>International Conference on Very Large Data Bases (VLDB) Year: 2022 to 2024 (demo), 2025 (research)</span><br>
              <span>IEEE International Conference on Data Engineering (ICDE) Year: 2022, 2024, 2025</span><br>
              <span>Proceedings of International Conference on Extending Database Technology (EDBT) Year: 2023</span><br>
              <span>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) Year: 2024, 2025</span><br>
              <span>International Joint Conference on Artificial Intelligence (IJCAI) Year: 2020</span>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Conference Program Session Chair</td>
            <td class="tdtext">
              <span>International Conference on Very Large Data Bases (VLDB) Year: 2020, 2022</span><br>
              <span>IEEE International Conference on Data Engineering (ICDE) Year: 2021, 2024</span><br>
              <span>International Joint Conference on Web and Big Data (APWeb-WAIM) Year: 2021</span><br>
              <span>International Conference on Web Information Systems Engineering (WISE) Year: 2021</span>
            </td>
          </tr>
        </tbody>
        <colgroup>
          <col>
          <col>
        </colgroup>
      </table>
    </div>
    <div class="teaching">
      <div class="teachingtitle">
        <div class="tellipse" />
        <p class="ptitle">Teaching</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <div class="card">
      <div class="course">
        <p class="ctitle">Course</p>
        <div class="ctext">
          <p>SZU Professional English (for PhD Students) (Spring 2024)</p>
          <p>SZU Software Testing (Spring 2024)</p>
          <p>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p>
          <p>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p>
          <p>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p>
        </div>
        <button class="more" @click="moreteaching(1)">MORE</button>
      </div>
      <div class="at">
        <p class="ctitle">Academic Talks</p>
        <div class="ctext">
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p>
          <p>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p>
        </div>
        <button class="more" @click="moreteaching(2)">MORE</button>
      </div>
      <div class="tutorials">
        <p class="ctitle">Tutorials</p>
        <div class="ctext">
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
        </div>
        <button class="more" @click="moreteaching(3)">MORE</button>
      </div>
    </div>
      <div v-if="teachingcard === 1" class="coursebig">
        <p class="titlebig">Course</p>
        <div class="textbig">
          <p>SZU Professional English (for PhD Students) (Spring 2024)</p>
          <p>SZU Software Testing (Spring 2024)</p>
          <p>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p>
          <p>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p>
          <p>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p>
        </div>
        <button class="fold" @click="foldteaching">FOLD</button>
      </div>
      <div v-if="teachingcard === 2" class="coursebig">
        <p class="titlebig">Academic Talks</p>
        <div class="textbig">
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p>
          <p>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p>
        </div>
        <button class="fold" @click="foldteaching">FOLD</button>
      </div>
      <div v-if="teachingcard === 3" class="coursebig">
        <p class="titlebig">Tutorials</p>
        <div class="textbig">
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
          <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Short Video) (Tutorial Slides)</p>
        </div>
        <button class="fold" @click="foldteaching">FOLD</button>
      </div>
    </div>
    <div class="end">
      <p class="endtitle">How to be Productive in Research?</p>
      <p class="endtext">If you want to be productive in research, you need to read this document (by Prof. Dimitris Papadias in HKUST), read this Zhihu blog (written in Chinese), and watch this video (by Prof. Baochun Li in the University of Toronto).</p>
    </div>
    <p class="welcome">Welcome to the Database Group in Shenzhen University (SZU).</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Location, Paperclip } from '@element-plus/icons-vue';

const showGroup2 = ref(false);
const showjr = ref(false);
const activetab = ref(1);
const teachingcard = ref(0);

function toggleGroup2() {
  showGroup2.value = !showGroup2.value;
}

function showjrfun() {
  showjr.value = !showjr.value;
}

const setActiveTab = (id: number) => {
  activetab.value = id;
};

const moreteaching = (id: number) => {
  teachingcard.value = id;
};

const foldteaching = () => {
  teachingcard.value = 0;
};
</script>

<style scoped>
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
.tname {
  position: absolute;
  top: 104px;
  left: 144px;
  height: 38px;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
}
.tintro {
  position: absolute;
  top: 170px;
  left: 144px;
  height: 59px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}
.tlocation {
  position: absolute;
  top: 291px;
  left: 144px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.temail {
  position: absolute;
  top: 329px;
  left: 144px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.teacherimg {
  position: absolute;
  top: 89px;
  right: 144px;
  width: 276px;
  height: 276px;
  object-fit: cover;
  mask-image: radial-gradient(circle, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 71%);
}
.text {
  max-width: 1152px;
  height: 179px;
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
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  border-radius: 50%;
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
  margin-top: 142px;
  width: 100%;
  height: 119px;
}
.rectangle1 {
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
}
.ritext {
  position: absolute;
  max-width: 100%;
  margin: 0 0 0 32px;
  height: 119px;
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
  margin: 450px 0 0 0;
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
  top: 581px;
  width: 100%;
  height: 586px;
}
.gtitle {
  position: absolute;
  height: 29px;
  font-weight: normal;
  font-size: 16px;
  color: #2F81FC;
  line-height: 30px;
}
.gintro {
  position: absolute;
  margin: 53px 0 0 0;
  height: 239px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.gimg1 {
  position: absolute;
  margin-top: 316px;
  left: 0;
  width: 373px;
  height: 270px;
}
.gimg2 {
  position: absolute;
  margin-top: 316px;
  left: 50%;
  transform: translateX(-50%);
  width: 373px;
  height: 270px;
}
.gimg3 {
  position: absolute;
  margin-top: 316px;
  right: 0;
  width: 373px;
  height: 270px;
}
.group2 {
  position: relative;
  margin: 605px 0 0 0;
  width: 100%;
  height: 586px;
}
.group3 {
  position: relative;
  margin: 24px 0 0 0;
  width: 100%;
  height: 586px;
}
.toggle-button {
  /* position: relative; */
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
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #F59191 100%);
  border-radius: 50%;
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
  border: 4px solid rgba(0,0,0,0);
  cursor: pointer;
}
.selecttab {
  color: #000000;
  background: #FFFFFF;
  border-radius: 32px 32px 32px 32px;
  border: 4px solid #000000;
}
.dblp {
  width: 271px;
  margin-top: 119px;
  height: 29px;
  font-weight: normal;
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
  content: '·';
}
.atext p {
  text-indent: -1em;
  padding-left: 1em;
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
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #6FBD79 100%);
  border-radius: 50%;
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
  content: '·';
}
td span {
  text-indent: -1em;
}
.showjrbutton {
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
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #B573FF 100%);
  border-radius: 50%;
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
.ctext p::before {
  content: '·';
}
.ctext p {
  text-indent: -1em;
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
.coursebig {
  position: relative;
  width: 83%;
  margin-top: 40px;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.titlebig {
  position: absolute;
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
.textbig {
  position: absolute;
  margin-top: 116px;
  margin-inline: 40px;
  height: 356px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.textbig p::before {
  content: '·';
}
.textbig p {
  text-indent: -1em;
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
  margin-top: 500px;
  margin-left: 85%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.end {
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
}
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