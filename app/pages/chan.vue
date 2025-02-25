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
          <span class="emailtext">edisonchan2013928@gmail.com</span>
          <span class="emailtext2">edisonchan@szu.edu.cn</span>
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
        <div style="display: flex;" class="gimgs">
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
        <div style="display: flex;" class="gimgs">
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
        <div style="display: flex;" class="gimgs">
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
        <div style="display: flex;" class="gimgs">
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
            <img v-if="showGroup2" src="/image/icon_fold.png" alt="" class="tbbutton2">
            <img v-else src="/image/icon_open.png" alt="" class=tbbutton>
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
          <el-col :span="2" :xs="0"/>
          <el-col :span="8" :xs="24">
            <div class="abuttons">
              <button class="abutton" :class="{'selecttab': activetab === 1}" @click="setActiveTab(1)">Research Awards</button>
              <button class="abutton" :class="{'selecttab': activetab === 2}" @click="setActiveTab(2)">Research Grants</button>
              <button class="abutton" :class="{'selecttab': activetab === 3}" @click="setActiveTab(3)">Research Publications</button>
              <button class="abutton" :class="{'selecttab': activetab === 4}" @click="setActiveTab(4)">Patents</button>
              <button class="abutton" :class="{'selecttab': activetab === 5}" @click="setActiveTab(5)">Tutorials</button>
              <button class="abutton" :class="{'selecttab': activetab === 6}" @click="setActiveTab(6)">Demo Publications</button>
            </div>
            <div class="dblp">
              <a href="https://dblp.org/pid/166/7652.html" target="_blank" style="color: #2F81FC;">[DBLP]</a>&nbsp;
              <a href="https://scholar.google.com.hk/citations?user=b2AOUEEAAAAJ&hl=en"  target="_blank" style="color: #2F81FC;">[Google Scholar]</a>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
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
              <p>Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br>
                <a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank">Large-scale Spatiotemporal Kernel Density Visualization</a><br>
                IEEE International Conference on Data Engineering (ICDE), 2025.
              </p>
              <p>Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu.<br>
                <a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank">Spatially Compact Dense Block Mining in Spatial Tensors</a><br>
                Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2025.
              </p>
              <p>Bo Guo, Zhihai Huang, Haitao Luo, Perpetual Hope Akwensi, Ruisheng Wang, Bo Huang, Tsz Nam Chan.<br>
                <a href="https://edisonchan-szu.github.io/publication/Tunnel.pdf" target="_blank">An Enhanced Network for Extracting Tunnel Lining Defects using Transformer Encoder and Aggregate Decoder</a><br>
                International Journal of Applied Earth Observation and Geoinformation (IJAEOG).
              </p>
              <p>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.<br>
                <a href="https://edisonchan-szu.github.io/publication/LARGE.pdf" target="_blank">LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2024. (Presented in VLDB 2025)
              </p>
              <p>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu.<br>
                <a href="https://edisonchan-szu.github.io/publication/PageRank_Approx.pdf" target="_blank">Efficient and Accurate PageRank Approximation on Large Graphs</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2025.<br>
                Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)".
              </p>
              <p>Pak Lon Ip, Shenghui Zhang, Xuekai Wei, Tsz Nam Chan, Leong Hou U.<br>
                <a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank">HFGNN: Efficient Graph Neural Networks using Hub-Fringe Structures</a><br>
                IEEE International Conference on Data Mining (ICDM), 2024.
              </p>
              <p>Renchi Yang, Yidu Wu, Xiaoyang Lin, Qichen Wang, Tsz Nam Chan, Jieming Shi.<br>
                <a href="https://edisonchan-szu.github.io/publication/ABG_clustering.pdf" target="_blank">Effective Clustering on Large Attributed Bipartite Graphs</a><br>
                Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2024.
              </p>
              <p>Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/LION.pdf" target="_blank">LION: Fast and High-Resolution Network Kernel Density Visualization</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2024. <a href="https://github.com/edisonchan2013928/LION" target="_blank">(Code)</a> <a href="https://edisonchan-szu.github.io/publication/LION.pptx" target="_blank">(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/LION_Poster.pptx">(Poster Presentation)</a>
              </p>
              <p>Shunran Zhang, Xiubo Zhang, Tsz Nam Chan, Shenghui Zhang, Leong Hou U.<br>
                <a href="https://edisonchan-szu.github.io/publication/EMD_shape_loss.pdf" target="_blank">A Computation-aware Shape Loss Function for Point Cloud Completion</a><br>
                Annual AAAI Conference on Artificial Intelligence (AAAI), 2024. <a href="https://edisonchan-szu.github.io/publication/Point_Cloud_Completion_AAAI24.pdf" target="_blank"> (Poster Presentation)</a>
              </p>
              <p>Tsz Nam Chan, Zhe Li, Leong Hou U, Reynold Cheng.<br>
                <a href="https://edisonchan-szu.github.io/publication/PLAME.pdf" target="_blank">PLAME: Piecewise-Linear Approximate Measure for Additive Kernel SVM</a><br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/PLAME-Code" target="_blank">(Code)</a><br>
                <a href="https://edisonchan-szu.github.io/publication/PLAME_TKDE_poster.pdf" target="_blank">Extended abstract</a> in IEEE International Conference on Data Engineering (ICDE), 2024. <a href="https://edisonchan-szu.github.io/publication/PLAME_Poster.pdf" target="_blank">(Poster Presentation)</a>
              </p>
              <p>Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/tau-MNG.pdf" target="_blank">Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://github.com/csypeng/taumng_sigmod" target="_blank">(Code)</a> (Short Video)<br>
                Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)".
              </p>
              <p>Tsz Nam Chan, Leong Hou U, Yun Peng, Byron Choi, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/Network-K-function.pdf" target="_blank">Fast Network K-function-based Spatial Analysis</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/edisonchan2013928/Network-K-function" target="_blank">(Code)</a><br>
                <a href="https://edisonchan-szu.github.io/publication/Network K-function.mp4" target="_blank">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/Network K-function.pptx">(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/network_K_function_TR.pdf" target="_blank">(Technical Report)</a> <a href="https://edisonchan-szu.github.io/publication/Network_K_function_Poster.pdf" target="_blank">(Poster Presentation)</a>
              </p>
              <p>Jie Chen, Zaifeng Yang, Tsz Nam Chan, Hui Li, Junhui Hou, Lap-Pui Chau.<br>
                <a href="https://ieeexplore.ieee.org/abstract/document/9740005" target="_blank">Attention-Guided Progressive Neural Texture Fusion for High Dynamic Range Image Restoration</a><br>
                IEEE Transactions on Image Processing (TIP).
              </p>
              <p>Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/LAN.pdf" target="_blank">LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases</a><br>
                IEEE International Conference on Data Engineering (ICDE), 2022. <a href="https://github.com/csypeng/LAN" target="_blank">(Code)</a>
              </p>
              <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/SLAM.pdf" target="_blank">SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2022. <a href="https://github.com/edisonchan2013928/SLAM" target="_blank">(Code)</a><br>
                <a href="https://www.youtube.com/watch?v=aOl0RigDuAg" target="_blank">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SLAM_presentation_v2.pptx">(Powerpoint Presentation)</a>
              </p>
              <p>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/SWS.pdf" target="_blank">SWS: A Complexity-Optimized Solution for Spatial-Temporal Kernel Density Visualization</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/STKDV/STKDV" target="_blank">(Code)</a><br>
                <a href="https://edisonchan-szu.github.io/publication/SWS.mp4">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SWS.pptx">(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SWS_STKDV_TR.pdf" target="_blank">(Technical Report)</a> <a href="https://edisonchan-szu.github.io/publication/SWS_Poster.pdf" target="_blank">(Poster Presentation)</a>
              </p>
              <p>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/SAFE.pdf" target="_blank">SAFE: A Share-and-Aggregate Bandwidth Exploration Framework for Kernel Density Visualization</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/edisonchan2013928/SAFE" target="_blank">(Code)</a><br>
                <a href="https://edisonchan-szu.github.io/publication/SAFE.mp4">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SAFE.pptx">(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SAFE_Poster.pdf" target="_blank">(Poster Presentation)</a>
              </p>
              <p>Zhe Li, Man Lung Yiu, Tsz Nam Chan.<br>
                <a href="https://edisonchan-szu.github.io/publication/PAW.pdf" target="_blank">PAW: Data Partitioning Meets Workload Variance</a><br>
                IEEE International Conference on Data Engineering (ICDE), 2022. <a href="https://github.com/cloudray8580/NORA_Simulation" target="_blank">(Simulation Code)</a> <a href="https://github.com/cloudray8580/NORA_SPARK" target="_blank">(Spark Code)</a>
              </p>
              <p>Tsz Nam Chan, Zhe Li, Leong Hou U, Jianliang Xu, Reynold Cheng.<br>
                <a href="https://edisonchan-szu.github.io/publication/NKDV.pdf" target="_blank">Fast Augmentation Algorithms for Network Kernel Density Visualization</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2021. <a href="https://github.com/edisonchan2013928/Network-Kernel-Density-Visualization-NKDV-Code" target="_blank">(Code)</a><br>
                <a href="https://www.youtube.com/watch?v=CHnepJYxnRA&feature=youtu.be" target="_blank">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/NKDV_PVLDB_v2.pptx">(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/Remark_NKDV.txt" target="_blank">(Remark)</a>
              </p>
              <p>Zhe Li, Tsz Nam Chan, Man Lung Yiu, Christian S. Jensen.<br>
                <a href="https://edisonchan-szu.github.io/publication/PolyFit.pdf" target="_blank">PolyFit: Polynomial-based Indexing Approach for Fast Approximate Range Aggregate Queries</a><br>
                Proceedings of International Conference on Extending Database Technology (EDBT), 2021.
              </p>
              <p>Hui Li, Tsz Nam Chan, Xianbiao Qi, Wuyuan Xie.<br>
                <a href="https://edisonchan-szu.github.io/publication/MESPD_Final.pdf" target="_blank">Detail-Preserving Multi-Exposure Fusion with Edge-Preserving Structural Patch Decomposition</a><br>
                IEEE Transactions on Circuits and Systems for Video Technology (TCSVT). <a href="https://github.com/xiaohuiben/MESPD_TCSVT-2021" target="_blank">(Code)</a>
              </p>
              <p>Zichen Zhu, Tsz Nam Chan, Reynold Cheng, Loc Do, Zhipeng Huang, Haoci Zhang.<br>
                <a href="https://ieeexplore.ieee.org/document/9253703" target="_blank">Effective and Efficient Discovery of Top-k Meta Paths in Heterogeneous Information Networks</a><br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/littlepig2013/topk-meta-path-query" target="_blank">(Code)</a>
              </p>
              <p>Tsz Nam Chan, Leong Hou U, Reynold Cheng, Man Lung Yiu, Shivansh Mittal.<br>
                <a href="https://edisonchan-szu.github.io/publication/KARL_AK.pdf" target="_blank">Efficient Algorithms for Kernel Aggregation Queries</a><br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/Fast-Prediction-for-Additive-Kernels-Using-KARL" target="_blank">(Code)</a>
              </p>
              <p>Tsz Nam Chan, Reynold Cheng, Man Lung Yiu.<br>
                <a href="https://edisonchan-szu.github.io/publication/QUAD.pdf" target="_blank">QUAD: Quadratic-Bound-based Kernel Density Visualization</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2020. <a href="https://github.com/edisonchan2013928/QUAD-for-Kernel-Density-Visualization-KDV-" target="_blank">(Code)</a><br>
                <a href="https://www.youtube.com/watch?v=4-3pYkPbgBo&feature=youtu.be" target="_blank">(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/QUAD_presentation_v5.pptx">(Powerpoint Presentation)</a> <a href="https://www.cs.hku.hk/data/techreps/document/TR-2019-05.pdf" target="_blank">(Technical Report)</a>
              </p>
              <p>Tsz Nam Chan.<br>
                <a href="https://ira.lib.polyu.edu.hk/handle/10397/80535" target="_blank">Similarity Measures: Algorithms and Applications</a><br>
                PhD Thesis.
              </p>
              <p>Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br>
                <a href="https://edisonchan-szu.github.io/publication/EMD.pdf" target="_blank">The Power of Bounds: Answering Approximate Earth Mover's Distance with Parametric Bounds</a><br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/EMD_Code" target="_blank">(Code)</a><br>
                <a href="https://edisonchan-szu.github.io/publication/EMD_extended_abstract.pdf" target="_blank">Extended abstract</a> in IEEE International Conference on Data Engineering (ICDE), 2020. <a href="https://www.youtube.com/watch?v=Zgov0uNxZQ4" target="_blank">(Video Presentation)</a>
              </p>
              <p>Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br>
                <a href="https://edisonchan-szu.github.io/publication/KARL.pdf" target="_blank">KARL: Fast Kernel Aggregation Queries</a><br>
                IEEE International Conference on Data Engineering (ICDE), 2019. <a href="https://github.com/edisonchan2013928/KARL-Fast-Kernel-Aggregation-Queries" target="_blank">(Code)</a> <a href="https://edisonchan-szu.github.io/publication/KARL_Poster.pdf" target="_blank">(Poster Presentation)</a>
              </p>
              <p>Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br>
                <a href="https://edisonchan-szu.github.io/publication/Matrix_NN.pdf" target="_blank">Efficient Sub-Window Nearest Neighbor Search on Matrix</a><br>
                IEEE Transactions on Knowledge and Data Engineering (TKDE).
              </p>
              <p>Hui Li, Tsz Nam Chan, Man Lung Yiu, Nikos Mamoulis.<br>
                <a href="https://edisonchan-szu.github.io/publication/FEXIPRO.pdf" target="_blank">FEXIPRO: Fast and Exact Inner Product Retrieval in Recommender Systems</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2017. <a href="https://github.com/Hui-Li/MFRetrieval" target="_blank">(Code)</a>
              </p>
              <p>Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br>
                <a href="https://edisonchan-szu.github.io/publication/Matrix_NN_conf.pdf" target="_blank">A Progressive Approach for Similarity Search on Matrix</a><br>
                International Symposium on Spatial and Temporal Databases (SSTD), 2015.
              </p>
            </div>
            <div v-if="activetab === 4" class="atext">
              <p>Tsz Nam Chan, Pak Lon Ip, , Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br>
                A Method, System, and Terminal for Spatiotemporal Kernel Density Visualization via PREFIX-Matrix Structure. (一种基于前缀矩阵的时空核密度可视化方法、系统及终端)<br>
                Chinese Patent <a href="https://edisonchan-szu.github.io/publication/PREFIX_patent_protected.pdf" target="_blank">(Protected (if granted)</a> starting from 31st December 2024)
              </p>
              <p>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.<br>
                A Method and System for Generating Line Density Visualization via Length-Aggregation-based Grid Structure. (一种基于长度聚合的网格结构生成线密度的方法及系统)<br>
                Chinese Patent <a href="https://edisonchan-szu.github.io/publication/LARGE_granted.pdf" target="_blank">(Granted)</a> <a href="https://edisonchan-szu.github.io/publication/LARGE_patent_protected.pdf" target="_blank">(Protected</a> starting from 30th October 2024)
              </p>
            </div>
            <div v-if="activetab === 5" class="atext">
              <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
                <a href="https://edisonchan-szu.github.io/publication/LSGA_tutorial.pdf" target="_blank">Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities</a> (1.5 hours)<br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://edisonchan-szu.github.io/publication/SIGMOD23-Tutorial-short-video.mp4" target="_blank">(Short Video)</a> <a href="https://github.com/edisonchan2013928/Tutorial-slides/blob/main/LSGA_SIGMOD2023_Tutorial.pdf" target="_blank">(Tutorial Slides)</a></p>
              <p>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br>
                <a href="https://edisonchan-szu.github.io/publication/KDV_tutorial.pdf" target="_blank">Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications</a> (1.5 hours)<br>
                IEEE International Conference on Mobile Data Management (MDM), 2023. <a href="https://github.com/edisonchan2013928/Tutorial-slides/blob/main/KDV_tutorial_slides.pptx" target="_blank">(Tutorial Slides)</a></p>
            </div>
            <div v-if="activetab === 6" class="atext">
              <p>Tsz Nam Chan, Rui Zang, Pak Lon Ip, Leong Hou U, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/PyNKDV.pdf" target="_blank">PyNKDV: An Efficient Network Kernel Density Visualization Library for Geospatial Analytic Systems</a><br>
                <a href="https://github.com/edisonchan2013928/PyNKDV" target="_blank">(Library Homepage)</a><br>
                Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://edisonchan-szu.github.io/publication/SIGMOD23-Demo-short-video.mp4" target="_blank">(Short Video)</a> <a href="https://edisonchan-szu.github.io/publication/PyNKDV_poster.pdf" target="_blank">(Poster Presentation)</a></p>
              <p>Tsz Nam Chan, Pak Lon Ip, Kaiyan Zhao, Leong Hou U, Byron Choi, Jianliang Xu.<br>
                <a href="https://edisonchan-szu.github.io/publication/LIBKDV.pdf" target="_blank">LIBKDV: A Versatile Kernel Density Visualization Library for Geospatial Analytics</a> <a href="https://github.com/libkdv/libkdv" target="_blank">(Library Homepage)</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://edisonchan-szu.github.io/system/Video/LIBKDV_Video_final.mp4" target="_blank">(Video Presentation)</a><br>
                Impact case 1: Used in the Macau COVID-19 HotSpot Map <a href="https://degroup.cis.um.edu.mo/covid-19/" target="_blank">(Project Website)</a> <a href="https://www.einnews.com/pr_news/581503973/um-covid-19-research-team-proposes-key-points-for-combating-epidemic" target="_blank">(News)</a> <a href="https://www.tdm.com.mo/zh-hant/news-detail/718799?date=" target="_blank">(Video News (in Cantonese))</a><br>
                Impact case 2: Used in the Hong Kong COVID-19 HotSpot Map <a href="https://covid19.comp.hkbu.edu.hk/" target="_blank">(Project Website)</a> <a href="https://www.thestandard.com.hk/breaking-news/section/4/197114/HKBU-led-research-team-launches-Hong-Kong-COVID-19-hotspot-map" target="_blank">(News)</a> <a href="https://hk.on.cc/hk/bkn/cnt/news/20221114/bkn-20221114134328250-1114_00822_001.html" target="_blank">(News (in Chinese))</a></p>
              <p>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Weng Hou Tong, Shivansh Mittal, Ye Li, Reynold Cheng.<br>
                <a href="https://edisonchan-szu.github.io/publication/KDV-Explorer.pdf" target="_blank">KDV-Explorer: A Near Real-Time Kernel Density Visualization System for Spatial Analysis</a> <a href="https://edisonchan-szu.github.io/system/KDV-Explorer.html" target="_blank">(Project Homepage)</a><br>
                Proceedings of the VLDB Endowment (PVLDB), 2021. <a href="https://www.youtube.com/watch?v=cHoILdTuz_o&feature=youtu.be" target="_blank">(Video Presentation)</a></p>
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
      <table style="border-collapse:separate; border-spacing:0px 24px;">
        <tbody>
          <tr>
            <td class="tdtitle">Major Service Award</td>
            <td class="tdtext">
              <p>Recognition of Outstanding Reviewer in SIGKDD 2025 (2024 Aug Cycle)</p>
              <p>Outstanding Reviewer Award in IEEE International Conference on Data Engineering (ICDE) 2024</p>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Journal Referee</td>
            <td class="tdtext">
              <p>The International Journal on Very Large Data Bases (VLDBJ)</p>
              <p>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p>
              <p>Artificial Intelligence Journal (AIJ)</p>
              <p>IEEE Transactions on Computers (TC)</p>
              <p>World Wide Web Journal (WWWJ)</p>
              <p v-if="showjr">ACM Transactions on Spatial Algorithms and Systems (TSAS)</p>
              <p v-if="showjr">SoftwareX Journal</p>
              <p v-if="showjr">Pattern Recognition (PR)</p>
              <p v-if="showjr">Data and Knowledge Engineering (DKE)</p>
              <p v-if="showjr">Digital Signal Processing (DSP)</p>
              <p v-if="showjr">Journal of Computer Science and Technology (JCST)</p>
              <p v-if="showjr">The Journal of Supercomputing</p>
              <p v-if="showjr">Cities Journal</p>
              <p v-if="showjr">Remote Sensing Journal</p>
              <p v-if="showjr">Engineering Applications of Artificial Intelligence Journal</p>
              <p v-if="showjr">Sensors Journal</p>
              <p v-if="showjr">Entropy Journal</p>
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
              <p>International Conference on Mobile Data Management (MDM) Year: 2021 to 2024 proceedings chair</p>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Conference Program Committee/Reviewer</td>
            <td class="tdtext">
              <p>International Conference on Very Large Data Bases (VLDB) Year: 2022 to 2024 (demo), 2025 (research)</p>
              <p>IEEE International Conference on Data Engineering (ICDE) Year: 2022, 2024, 2025</p>
              <p>Proceedings of International Conference on Extending Database Technology (EDBT) Year: 2023</p>
              <p>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) Year: 2024, 2025</p>
              <p>International Joint Conference on Artificial Intelligence (IJCAI) Year: 2020</p>
              <p v-if="showcpc">International Conference on Scientific and Statistical Database Management (SSDBM) Year: 2024</p>
              <p v-if="showcpc">Asian Conference on Machine Learning (ACML) Year: 2024</p>
              <p v-if="showcpc">International Conference on Database Systems for Advanced Applications (DASFAA) Year: 2021 to 2024</p>
              <p v-if="showcpc">International Conference on Web Information Systems Engineering (WISE) Year: 2019 to 2024</p>
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
              <p>International Conference on Very Large Data Bases (VLDB) Year: 2020, 2022</p>
              <p>IEEE International Conference on Data Engineering (ICDE) Year: 2021, 2024</p>
              <p>International Joint Conference on Web and Big Data (APWeb-WAIM) Year: 2021</p>
              <p>International Conference on Web Information Systems Engineering (WISE) Year: 2021</p>
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
          <button class="more1" style="display: flex;" @click="moreteaching(1)">
            MORE
            <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
          </button>
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
          <button class="more2" style="display: flex;" @click="moreteaching(2)">
            MORE
            <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
          </button>
        </div>
        <div class="tutorials">
          <p class="ctitle">Students</p>
          <div class="ctext">
            <p>Hongwei Ye, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p>
            <p>Yue Zhong, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p>
            <p>Bojian Zhu, undergraduate research assistant in HKBU (From June 2023 to August 2024) (Coauthored two VLDB papers with me)</p>
            <p>Rui Zang, undergraduate research assistant in HKBU (From May 2023 to July 2023) (Coauthored one VLDB paper and one SIGMOD demo paper with me)</p>
          </div>
          <button class="more3" style="display: flex;" @click="moreteaching(3)">
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
        <p class="titlebig">Students</p>
        <div class="textbig">
          <p>Hongwei Ye, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p>
          <p>Yue Zhong, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p>
          <p>Bojian Zhu, undergraduate research assistant in HKBU (From June 2023 to August 2024) (Coauthored two VLDB papers with me)</p>
          <p>Rui Zang, undergraduate research assistant in HKBU (From May 2023 to July 2023) (Coauthored one VLDB paper and one SIGMOD demo paper with me)</p>
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
    <p class="welcome">Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'assets/fonts/fonts.css';

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
.emailtext2 {
  position: absolute;
  width: 300px;
  left: 316px;
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
  /* height: 29px; */
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
.tbbutton {
  width: 10px;
  height: 10px;
  margin-left: 6px;
  margin-top: 10px;
}
.tbbutton2 {
  width: 10px;
  height: 10px;
  margin-left: 6px;
  margin-top: 10px;
}
.achievement {
  position: relative;
  margin-top: 80px;
  max-width: 1152px;
  height: 1135px;
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
  height: 1044px;
  background: rgba(196,196,196,0);
  border-radius: 16px 16px 16px 16px;
  border: 4px solid #000000;
}
.abuttons {
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-top: 80px;
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
  height: 756px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) rgba(0,0,0,0);
}
.atext p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.atext p {
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
td p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
td p {
  padding-left: 1em;
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
  line-height: 35px;
}
.teaching {
  position: relative;
  margin-top: 40px;
  max-width: 1152px;
  height: 645px;
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
  /* height: 594px; */
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
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
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
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.coursebig {
  position: fixed;
  width: 83%;
  height: 80%;
  top: 10%;
  left: 8.5%;
  /* transform: translate(-50%, -50%); */
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  z-index: 1000;
  /* overflow-x: scroll; */
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
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.textbig p {
  padding-left: 1em;
}
.more1 {
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
  visibility: hidden;
}
.more2 {
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.more3 {
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.fold {
  position: fixed;
  bottom: 10%;
  right: 15%;
  padding-bottom: 24px;
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
@media (max-width: 480px) {
  .top {
    height: 555px;
  }
  .topcontainer {
    max-width: 100%;
    height: 555px;
    text-align: center;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
  }
  .teacherimg {
    top: 32px;
    right: calc((100% - 120px)/2);
    width: 120px;
    height: 120px;
  }
  .tname {
    top: 168px;
    width: 100%;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .tintro {
    top: 218px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 119px;
    font-size: 14px;
    line-height: 30px;
  }
  .tlocation {
    top: 361px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 62px;
  }
  .icon_address {
    left: calc((100% - 24px)/2);
    width: 24px;
    height: 24px;
  }
  .locationtext {
    top: 32px;
    left: 0;
    width: 257px;
    font-size: 14px;
    line-height: 30px;
  }
  .temail {
    margin-top: 58px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 62px;
  }
  .icon_email {
    left: calc((100% - 24px)/2);
    width: 24px;
    height: 24px;
  }
  .emailtext {
    top: 32px;
    left: 0;
    width: 257px;
    font-size: 14px;
    line-height: 30px;
  }
  .emailtext2 {
    top: 57px;
    left: 0;
    width: 257px;
    font-size: 14px;
    line-height: 30px;
  }
  .text {
    max-width: 304px;
    margin-top: 24px;
    text-align: center;
  }
  .research {
    max-width: 304px;
    /* height: 1831px; */
  }
  .rtitle {
    width: 137px;
    height: 29px;
    margin-left: calc((100% - 137px)/2);
  }
  .rellipse {
    width: 20px;
    height: 20px;
  }
  .title {
    top: 3px;
    left: 13px;
    width: 137px;
    height: 29px;
    font-size: 20px;
    line-height: 29px;
  }
  .rline1 {
    top: 23px;
    width: 17px;
  }
  .rline2 {
    top: 29px;
    width: 72px;
  }
  .ri {
    margin-top: 53px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .rifield {
    margin-top: 103px;
    height: 300px;
  }
  .rectangle1 {
    margin-top: 10px;
  }
  .rectangle2 {
    margin-top: 40px;
  }
  .rectangle3 {
    margin-top: 220px;
  }
  .rectangle4 {
    margin-top: 250px;
  }
  .ritext {
    height: 300px;
  }
  .Long-Term-Goal {
    margin-top: 427px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .ltgtext {
    margin-top: 477px;
    height: 359px;
  }
  .Selected-projects {
    margin-top: 860px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .sptext {
    margin-top: 910px;
    height: 179px;
  }
  .group {
    top: 1105px;
    /* height: 586px; */
  }
  .gtitle {
    font-size: 14px;
    line-height: 30px;
  }
  .gintro {
    margin-top: 8px;
    font-size: 14px;
    line-height: 30px;
  }
  .group2 {
    margin-top: 1150px;
    /* height: 586px; */
  }
  .gimgs {
    overflow-x: scroll;
  }
  .gimg1 {
    width: 304px;
    height: 220px;
  }
  .gimg2 {
    margin-left: 5px;
    width: 304px;
    height: 220px;
  }
  .gimg3 {
    margin-left: 5px;
    width: 304px;
    height: 220px;
  }
  .image-container::before {
    display: none;
  }
  .toggle-button {
    width: 228px;
    height: 60px;
    margin-left: calc((100% - 228px)/2);
    font-size: 14px;
    line-height: 30px;
  }
  .tbbutton {
    margin-top: 40px;
    margin-left: 0;
    transform: translateX(-10px);
  }
  .achievement {
    max-width: 304px;
    height: 1250px;
  }
  .aellipse {
    width: 20px;
    height: 20px;
    margin-left: calc((100% - 185px)/2);
  }
  .atitle {
    width: 137px;
    height: 29px;
    top: 3px;
    left: calc((100% - 185px) / 2 + 13px);
    font-size: 20px;
    line-height: 26px;
  }
  .aline1 {
    top: 23px;
    left: calc((100% - 185px) / 2 + 168px);
    width: 17px;
  }
  .aline2 {
    top: 29px;
    left: calc((100% - 185px) / 2 + 113px);
    width: 72px;
  }
  .achievements {
    top: 71px;
    width: 100%;
    height: 1144px;
  }
  .abuttons {
    margin-top: 40px;
    gap: 24px;
  }
  .abutton {
    width: 240px;
    height: 60px;
    margin-left: calc((100% - 240px)/2);
    font-size: 16px;
    line-height: 32px;
  }
  .dblp {
    width: 176px;
    margin-top: 24px;
    margin-left: calc((100% - 176px)/2);
    height: 29px;
    font-size: 14px;
    line-height: 30px;
  }
  .atext {
    width: 256px;
    margin-top: 40px;
    margin-left: calc((100% - 256px)/2);
    height: 480px;
  }
  .ps {
    margin-top: 40px;
    max-width: 304px;
  }
  .pstitle {
    margin-top: 40px;
    width: 255px;
    height: 29px;
    margin-left: calc((100% - 255px)/2);
  }
  .pellipse {
    width: 20px;
    height: 20px;
  }
  .ptitle {
    width: 229px;
    height: 26px;
    top: 3px;
    left: 13px;
    font-size: 20px;
    line-height: 26px;
  }
  .pline1 {
    top: 23px;
    right: 0;
    width: 17px;
  }
  .pline2 {
    top: 29px;
    right: 0;
    width: 72px;
  }
  td {
    display: block;
  }
  .tdtitle {
    width: 100%;
    font-size: 14px;
    line-height: 30px;
  }
  .tdtext {
    height: auto;
    font-size: 14px;
    line-height: 30px;
  }
  .teaching {
    margin-top: 40px;
    max-width: 304px;
    height: 1650px;
  }
  .teachingtitle {
    width: 135px;
    height: 42px;
    margin-left: calc((100% - 135px)/2);
  }
  .tellipse {
    width: 20px;
    height: 20px;
  }
  .course {
    position: relative;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .at {
    position: relative;
    left: 0;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .tutorials {
    position: relative;
    left: 0;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .ctitle {
    position: relative;
    margin-top: 0;
    top: 32px;
    width: 100%;
    margin-left: 0;
    height: 36px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .more1 {
    visibility: visible;
  }
  .coursebig {
    position: fixed;
    width: 304px;
    /* height: 505px; */
    top: 32px;
    left: calc((100% - 304px)/2);
    /* overflow-x: none; */
  }
  .titlebig {
    margin-left: 0;
    width: 100%;
    height: 36px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .textbig {
    margin-top: 54px;
    padding-top: 0;
    margin-inline: 24px;
    height: 75%;
    font-size: 14px;
    line-height: 30px;
    overflow-x: scroll;
  }
  .fold {
    bottom: 17%;
    right: 23%;
    padding-bottom: 24px;
    font-size: 14px;
    line-height: 30px;
  }
  .end {
    width: 304px;
    height: 370px;
  }
  .endtitle {
    margin-top: 40px;
    margin-left: calc((100% - 210px)/2);
    width: 210px;
    height: 72px;
    font-size: 18px;
    line-height: 36px;
  }
  .endtext {
    margin-top: 24px;
    margin-inline: 24px;
    height: 59px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
  }
  .welcome {
    margin-top: 40px;
    margin-left: calc((100% - 298px)/2);
    width: 298px;
    height: 26px;
    font-size: 10px;
    /* line-height: 26px; */
  }
}
</style>