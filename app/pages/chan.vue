<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="bg">
    <div class="top">
      <div class="topcontainer">
        <div class="tname">Tsz Nam Chan (Edison)</div>
        <div class="tintro">Distinguished Professor<br>College of Computer Science and Software Engineering Shenzhen University</div>
        <div class="tlocation">
          <img src="/image/icon_address.png" alt="" class="icon_address">
          <span class="locationtext">Zhiteng Building 618-3</span>
        </div>
        <div class="temail">
          <img src="/image/icon_email.png" alt="" class="icon_email">
          <span class="emailtext">edisonchan2013928@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disonchan@szu.edu.cn</span>
        </div>
        <img src="/image/chan.png" alt="" class="teacherimg" />
      </div>
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
        <img src="/image/pic_blue.png" alt="" class="rellipse">
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
        <p class="gtitle">LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization</p>
        <p class="gintro">Line Density Visualization (LDV) is an important operation of geospatial analysis, which has been extensively used in many application domains, e.g., urban planning, criminology, and transportation science. However, LDV is computationally demanding. Therefore, existing exact solutions are not scalable (or even not feasible) to support large-scale datasets and high resolution sizes for generating LDV. To handle the efficiency issues, we develop the first solution to approximately compute LDV with an 𝜖-relative error guarantee, which consists of two main parts. First, we develop the new indexing structure, called length-aggregation-based grid structure (LARGE). Second, based on LARGE, we develop two types of fast bound functions, namely (1) square-shaped lower and upper bound functions and (2) arbitrary-shaped lower and upper bound functions, which can filter a large portion of unnecessary computations. By theoretically analyzing the tightness of our bound functions and experimentally comparing our solution with existing exact solutions on four large-scale datasets, we demonstrate that our solution can be scalable to generate high-resolution LDVs using large-scale datasets. In particular, our solution achieves up to 291.8x speedups over the state-of-the-art solutions. </p>
        <div style="display: flex;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro1_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/pro1_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro1_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/pro1_2.png']"/>
          </div>
        </div>
      </div>
      <div class="group2">
        <p class="gtitle">LION: Fast and High-Resolution Network Kernel Density Visualization</p>
        <p class="gintro">Network Kernel Density Visualization (NKDV) has often been used in a wide range of applications, e.g., criminology, transportation science, and urban planning. However, NKDV is computationally expensive, which cannot be scalable to large-scale datasets and high resolution sizes. Although a recent work, called aggregate distance augmentation (ADA), has been developed for improving the efficiency to generate NKDV, this method is still slow and does not take the resolution size into account for optimizing the efficiency. In this paper, we develop a new solution, called LION, which can reduce the worst-case time complexity for generating high-resolution NKDV, without increasing the space complexity. Experiment results on four large-scale location datasets verify that LION can achieve 2.86x to 35.36x speedup compared with the stateof-the-art ADA method. </p>
        <div style="display: flex;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro2_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/pro2_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro2_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/pro2_2.png']"/>
          </div>
        </div>
      </div>
      <div v-if="showGroup2" class="group3">
        <p class="gtitle">Fast Network K-function-based Spatial Analysis</p>
        <p class="gintro">Network K-function has been the de facto operation for analyzing point patterns in spatial networks, which is widely used in many communities, including geography, ecology, transportation science, social science, and criminology. To analyze a location dataset, domain experts need to generate a network K-function plot that involves computing multiple network K-functions. However, network K-function is a computationally expensive operation that is not feasible to support large-scale datasets, let alone to generate a network K-function plot. To handle this issue, we develop two efficient algorithms, namely count augmentation (CA) and neighbor sharing (NS), which can reduce the worst-case time complexity for computing network K-functions. In addition, we incorporate the advanced shortest path sharing (ASPS) approach into these two methods to further lower the worst-case time complexity for generating network K-function plots. Experiment results on four large-scale location datasets (up to 7.33 million data points) show that our methods can achieve up to 165.85x speedup compared with the state-of-the-art methods. </p>
        <div style="display: flex;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro3_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/pro3_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro3_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/pro3_2.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro3_3.png`" fit="cover" alt="" class="gimg3" :preview-src-list="['/academicpage/image/pro3_3.png']"/>
          </div>
        </div>
      </div>
      <div v-if="showGroup2" class="group4">
        <p class="gtitle">SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization</p>
        <p class="gintro">Kernel Density Visualization (KDV) has been extensively used in a wide range of applications, including traffic accident hotspot detection, crime hotspot detection, disease outbreak detection, and ecological modeling. However, KDV is a computationally expensive operation, which is not scalable to large datasets (e.g., million-scale data points) and high resolution sizes (e.g., 1920 × 1080). To significantly improve the efficiency for generating KDV, we develop two efficient Sweep Line AlgorithMs (SLAM), which can theoretically reduce the time complexity for generating KDV. By incorporating the resolution-aware optimization (RAO) into SLAM, we can further achieve the lowest time complexity for generating KDV. Our extensive experiments on four large-scale real datasets (up to 4.33 million data points) show that all our methods can achieve one to two-order-of-magnitude speedup in many test cases and efficiently support KDV with exploratory operations (e.g., zooming and panning) compared with the state-of-the-art solutions.</p>
        <div style="display: flex;">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro4_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/pro4_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/pro4_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/pro4_2.png']"/>
          </div>
        </div>
      </div>
      <p style="display: flex; margin-top: 24px; height: 30px; line-height: 30px; color: #2F81FC; font-weight: 400; font-size: 14px;">
        <button class="toggle-button" @click="toggleGroup2" >
            {{ showGroup2 ? 'FOLD' : 'If you want to view more projects, please click MORE' }}
            <img v-if="showGroup2" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
            <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
        </button>
      </p>
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
              <el-button class="abutton" :class="{'selecttab': activetab === 1}" @click="setActiveTab(1)">Research Awards</el-button>
              <el-button class="abutton" :class="{'selecttab': activetab === 2}" @click="setActiveTab(2)">Research Grants</el-button>
              <el-button class="abutton" :class="{'selecttab': activetab === 3}" @click="setActiveTab(3)">Research Publications</el-button>
              <el-button class="abutton" :class="{'selecttab': activetab === 4}" @click="setActiveTab(4)">Patents</el-button>
            </div>
            <div class="dblp">
              <a href="https://dblp.org/pid/166/7652.html" target="_blank" style="color: #2F81FC;">[DBLP]</a>&nbsp;
              <a href="https://scholar.google.com.hk/citations?user=b2AOUEEAAAAJ&hl=en"  target="_blank" style="color: #2F81FC;">[Google Scholar]</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div v-if="activetab === 1" class="atext">
              <p>IEEE Senior Member (Awarded in 2024)</p>
              <p>National Science Fund for Excellent Young Scientists (Overseas) (国家海外优青) (Awarded in 2023)</p>
            </div>
            <div v-if="activetab === 2" class="atext">
              <p>PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB</p>
              <p>PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB</p>
              <p>PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB</p>
              <p>PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB</p>
              <p>PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB</p>
              <p>PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB</p>
              <p>PI: HKBU Internal Grant, 100,000 HKD</p>
              <p>PI: HKBU Start-up Grant, 120,000 HKD</p>
            </div>
            <div v-if="activetab === 3" class="atext">
              <p>
                Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br>
                Large-scale Spatiotemporal Kernel Density Visualization<br>
                IEEE International Conference on Data Engineering (ICDE), 2025.
              </p>
              <p>
                Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu.<br>
                Spatially Compact Dense Block Mining in Spatial Tensors<br>
                Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2025.
              </p>
              <p>
                Bo Guo, Zhihai Huang, Haitao Luo, Perpetual Hope Akwensi, Ruisheng Wang, Bo Huang, Tsz Nam Chan.<br>
                An Enhanced Network for Extracting Tunnel Lining Defects using Transformer Encoder and Aggregate Decoder<br>
                International Journal of Applied Earth Observation and Geoinformation (IJAEOG).
              </p>
              <p>
                Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.
                LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization
                Proceedings of the VLDB Endowment (PVLDB), 2024. (Presented in VLDB 2025)
              </p>
              <p>
                Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu.<br>
                Efficient and Accurate PageRank Approximation on Large Graphs<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2025.<br>
                Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)".
              </p>
              <p>
                Pak Lon Ip, Shenghui Zhang, Xuekai Wei, Tsz Nam Chan, Leong Hou U.<br>
                HFGNN: Efficient Graph Neural Networks using Hub-Fringe Structures<br>
                IEEE International Conference on Data Mining (ICDM), 2024.
              </p>
              <p>
                Renchi Yang, Yidu Wu, Xiaoyang Lin, Qichen Wang, Tsz Nam Chan, Jieming Shi.<br>
                Effective Clustering on Large Attributed Bipartite Graphs<br>
                Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2024.
              </p>
              <p>
                Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu.<br>
                LION: Fast and High-Resolution Network Kernel Density Visualization<br>
                Proceedings of the VLDB Endowment (PVLDB), 2024. (Code) (Powerpoint Presentation) (Poster Presentation)
              </p>
              <p>
                Shunran Zhang, Xiubo Zhang, Tsz Nam Chan, Shenghui Zhang, Leong Hou U.<br>
                A Computation-aware Shape Loss Function for Point Cloud Completion<br>
                Annual AAAI Conference on Artificial Intelligence (AAAI), 2024. (Poster Presentation)
              </p>
              <p>
                Tsz Nam Chan, Zhe Li, Leong Hou U, Reynold Cheng.<br>
                PLAME: Piecewise-Linear Approximate Measure for Additive Kernel SVM<br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). (Code)<br>
                Extended abstract in IEEE International Conference on Data Engineering (ICDE), 2024. (Poster Presentation)
              </p>
              <p>
                Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu.<br>
                Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. (Code) (Short Video)<br>
                Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)".
              </p>
              <p>
                Tsz Nam Chan, Leong Hou U, Yun Peng, Byron Choi, Jianliang Xu.<br>
                Fast Network K-function-based Spatial Analysis<br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. (Code)<br>
                (Video Presentation) (Powerpoint Presentation) (Technical Report) (Poster Presentation)
              </p>
              <p>
                Jie Chen, Zaifeng Yang, Tsz Nam Chan, Hui Li, Junhui Hou, Lap-Pui Chau.<br>
                Attention-Guided Progressive Neural Texture Fusion for High Dynamic Range Image Restoration<br>
                IEEE Transactions on Image Processing (TIP).
              </p>
              <p>
                Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu.<br>
                LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases<br>
                IEEE International Conference on Data Engineering (ICDE), 2022. (Code)
              </p>
              <p>
                Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2022. (Code)<br>
                (Video Presentation) (Powerpoint Presentation)
              </p>
              <p>
                Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                SWS: A Complexity-Optimized Solution for Spatial-Temporal Kernel Density Visualization<br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. (Code)<br>
                (Video Presentation) (Powerpoint Presentation) (Technical Report) (Poster Presentation)
              </p>
              <p>
                Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                SAFE: A Share-and-Aggregate Bandwidth Exploration Framework for Kernel Density Visualization<br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. (Code)<br>
                (Video Presentation) (Powerpoint Presentation) (Poster Presentation)
              </p>
              <p>
                Zhe Li, Man Lung Yiu, Tsz Nam Chan.<br>
                PAW: Data Partitioning Meets Workload Variance<br>
                IEEE International Conference on Data Engineering (ICDE), 2022. (Simulation Code) (Spark Code)
              </p>
              <p>
                Tsz Nam Chan, Zhe Li, Leong Hou U, Jianliang Xu, Reynold Cheng.<br>
                Fast Augmentation Algorithms for Network Kernel Density Visualization<br>
                Proceedings of the VLDB Endowment (PVLDB), 2021. (Code)<br>
                (Video Presentation) (Powerpoint Presentation) (Remark)
              </p>
              <p>
                Zhe Li, Tsz Nam Chan, Man Lung Yiu, Christian S. Jensen.<br>
                PolyFit: Polynomial-based Indexing Approach for Fast Approximate Range Aggregate Queries<br>
                Proceedings of International Conference on Extending Database Technology (EDBT), 2021.
              </p>
              <p>
                Hui Li, Tsz Nam Chan, Xianbiao Qi, Wuyuan Xie.<br>
                Detail-Preserving Multi-Exposure Fusion with Edge-Preserving Structural Patch Decomposition<br>
                IEEE Transactions on Circuits and Systems for Video Technology (TCSVT). (Code)
              </p>
              <p>
                Zichen Zhu, Tsz Nam Chan, Reynold Cheng, Loc Do, Zhipeng Huang, Haoci Zhang.<br>
                Effective and Efficient Discovery of Top-k Meta Paths in Heterogeneous Information Networks<br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). (Code)
              </p>
              <p>
                Tsz Nam Chan, Leong Hou U, Reynold Cheng, Man Lung Yiu, Shivansh Mittal.<br>
                Efficient Algorithms for Kernel Aggregation Queries<br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). (Code)
              </p>
              <p>
                Tsz Nam Chan, Reynold Cheng, Man Lung Yiu.<br>
                QUAD: Quadratic-Bound-based Kernel Density Visualization<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2020. (Code)<br>
                (Video Presentation) (Powerpoint Presentation) (Technical Report)
              </p>
              <p>
                Tsz Nam Chan.<br>
                Similarity Measures: Algorithms and Applications<br>
                PhD Thesis.
              </p>
              <p>
                Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br>
                The Power of Bounds: Answering Approximate Earth Mover's Distance with Parametric Bounds<br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). (Code)<br>
                Extended abstract in IEEE International Conference on Data Engineering (ICDE), 2020. (Video Presentation)
              </p>
              <p>
                Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br>
                KARL: Fast Kernel Aggregation Queries<br>
                IEEE International Conference on Data Engineering (ICDE), 2019. (Code) (Poster Presentation)
              </p>
              <p>
                Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br>
                Efficient Sub-Window Nearest Neighbor Search on Matrix<br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE).
              </p>
              <p>
                Hui Li, Tsz Nam Chan, Man Lung Yiu, Nikos Mamoulis.<br>
                FEXIPRO: Fast and Exact Inner Product Retrieval in Recommender Systems<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2017. (Code)
              </p>
              <p>
                Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br>
                A Progressive Approach for Similarity Search on Matrix<br>
                International Symposium on Spatial and Temporal Databases (SSTD), 2015.
              </p>
            </div>
            <div v-if="activetab === 4" class="atext">
              <p>
                Tsz Nam Chan, Pak Lon Ip, , Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br>
                A Method, System, and Terminal for Spatiotemporal Kernel Density Visualization via PREFIX-Matrix Structure. (一种基于前缀矩阵的时空核密度可视化方法、系统及终端)<br>
                Chinese Patent (Submitted soon)
              </p>
              <p>
                Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.<br>
                A Method and System for Generating Line Density Visualization via Length-Aggregation-based Grid Structure. (一种基于长度聚合的网格结构生成线密度的方法及系统)<br>
                Chinese Patent (Under review) (Protected (if granted) starting from 30th October 2024)
              </p>
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
          <tr>
            <td class="tdtitle">Major Service Award</td>
            <td class="tdtext">
              <span>Recognition of Outstanding Reviewer in SIGKDD 2025 (2024 Aug Cycle)</span><br>
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
              <span v-if="showjr">ACM Transactions on Spatial Algorithms and Systems (TSAS)<br></span>
              <span v-if="showjr">SoftwareX Journal<br></span>
              <span v-if="showjr">Pattern Recognition (PR)<br></span>
              <span v-if="showjr">Data and Knowledge Engineering (DKE)<br></span>
              <span v-if="showjr">Digital Signal Processing (DSP)<br></span>
              <span v-if="showjr">Journal of Computer Science and Technology (JCST)<br></span>
              <span v-if="showjr">The Journal of Supercomputing<br></span>
              <span v-if="showjr">Cities Journal<br></span>
              <span v-if="showjr">Remote Sensing Journal<br></span>
              <span v-if="showjr">Engineering Applications of Artificial Intelligence Journal<br></span>
              <span v-if="showjr">Sensors Journal<br></span>
              <span v-if="showjr">Entropy Journal<br></span>
              <button class="showjrbutton" @click="showjrfun">
                {{ showjr ? 'FOLD' : 'MORE'}}
                <img v-if="showjr" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
                <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
              </button>
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
              <span>International Joint Conference on Artificial Intelligence (IJCAI) Year: 2020</span><br>
              <span v-if="showcpc">International Conference on Scientific and Statistical Database Management (SSDBM) Year: 2024<br></span>
              <span v-if="showcpc">Asian Conference on Machine Learning (ACML) Year: 2024<br></span>
              <span v-if="showcpc">International Conference on Database Systems for Advanced Applications (DASFAA) Year: 2021 to 2024<br></span>
              <span v-if="showcpc">International Conference on Web Information Systems Engineering (WISE) Year: 2019 to 2024<br></span>
              <button class="showcpcbutton" @click="showcpcfun">
                {{ showcpc ? 'FOLD' : 'MORE'}}
                <img v-if="showcpc" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
                <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
              </button>
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
        <img src="/image/pic_purple.png" alt="" class="tellipse">
        <p class="ptitle">Teaching</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <div class="card">
      <div class="course">
        <p class="ctitle">Courses</p>
        <div class="ctext">
          <p>SZU Professional English (for PhD Students) (Spring 2024)</p>
          <p>SZU Software Testing (Spring 2024)</p>
          <p>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p>
          <p>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p>
          <p>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p>
        </div>
        <!-- <button class="more" style="display: flex;" @click="moreteaching(1)"> -->
          <!-- MORE -->
          <!-- <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;"> -->
        <!-- </button> -->
      </div>
      <div class="at">
        <p class="ctitle">Academic Talks</p>
        <div class="ctext">
          <p>What Should You Think to Perfectly Present Research Papers? (November 2024), Duke Kunshan University (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (November 2024), Hangzhou Dianzi University (China)</p>
          <p>LION: Fast and High-Resolution Network Kernel Density Visualization (November 2024), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Hong Kong University of Science and Technology (Guangzhou) (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Guangzhou University (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p>
          <p>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p>
        </div>
        <button class="more" style="display: flex;" @click="moreteaching(2)">
          MORE
          <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div class="tutorials">
        <p class="ctitle">Tutorials</p>
        <div class="ctext">
          <p>
            Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
            Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)<br>
            Proceedings of ACM Conference on Management of Data (SIGMOD), 2023.
          </p>
          <p>
            Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
            Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications (1.5 hours)<br>
            IEEE International Conference on Mobile Data Management (MDM), 2023. (Tutorial Slides)
          </p>
        </div>
        <button class="more" style="display: flex;" @click="moreteaching(3)">
          MORE
          <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
    </div>
      <!-- <div class="book"> -->
        <!-- <p class="booktitle">Book</p> -->
        <!-- <div class="booktext"> -->
          <!-- <p>Chan, T. N., & Cheng, R. (2023). Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities. ACM Conference on Management of Data (SIGMOD).</p> -->
          <!-- <p>Chan, T. N., & Cheng, R. (2023). Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities. ACM Conference on Management of Data (SIGMOD).</p> -->
          <!-- <p>Chan, T. N., & Cheng, R. (2023). Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities. ACM Conference on Management of Data (SIGMOD).</p> -->
        <!-- </div> -->
      <!-- </div> -->
      <div id="overlay" class="overlay"></div>
      <div v-if="teachingcard === 1" class="coursebig">
        <p class="titlebig">Course</p>
        <div class="textbig">
          <p>SZU Professional English (for PhD Students) (Spring 2024)</p>
          <p>SZU Software Testing (Spring 2024)</p>
          <p>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p>
          <p>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p>
          <p>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 2" class="coursebig">
        <p class="titlebig">Academic Talks</p>
        <div class="textbig">
          <p>What Should You Think to Perfectly Present Research Papers? (November 2024), Duke Kunshan University (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (November 2024), Hangzhou Dianzi University (China)</p>
          <p>LION: Fast and High-Resolution Network Kernel Density Visualization (November 2024), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Hong Kong University of Science and Technology (Guangzhou) (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Guangzhou University (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p>
          <p>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p>
          <p>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 3" class="coursebig">
        <p class="titlebig">Tutorials</p>
        <div class="textbig">
          <p>
            Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
            Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities (1.5 hours)<br>
            Proceedings of ACM Conference on Management of Data (SIGMOD), 2023.
          </p>
          <p>
            Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
            Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications (1.5 hours)<br>
            IEEE International Conference on Mobile Data Management (MDM), 2023. (Tutorial Slides)
          </p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
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
import '/d:/VS code/academicpage/app/assets/fonts/fonts.css';

const showGroup2 = ref(false);
const showjr = ref(false);
const showcpc = ref(false);
const activetab = ref(1);
const teachingcard = ref(0);

function toggleGroup2() {
  showGroup2.value = !showGroup2.value;
}

function showjrfun() {
  showjr.value = !showjr.value;
}

function showcpcfun() {
  showcpc.value = !showcpc.value;
}

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
  width: 191px;
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
  /* object-fit: cover; */
}
.gimg2 {
  margin-top: 24px;
  margin-left: 5px;
  /* transform: translateX(-50%); */
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
  /* object-fit: cover; */
}
.gimg3 {
  margin-top: 24px;
  margin-left: 5px;
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
  /* object-fit: cover; */
}
.group2 {
  position: relative;
  margin: 605px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.group3 {
  position: relative;
  margin: 24px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.group4 {
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
  height: 835px;
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
  height: 744px;
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
  content: '·';
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
.showcpcbutton {
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
  height: 36px;
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.booktext {
  padding-top: 116px;
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