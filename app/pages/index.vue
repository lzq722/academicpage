<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/html-end-tags -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <!-- <div class="bg"> -->
  <div class="home">
    <div class="image-container">
      <img src="/image/image.png" alt="Background Image" class="background-image" />
      <div class="overlay">
        <p class="title">SZU</p>
        <p class="subtitle">Data Management & Intelligence Group</p>
        <!-- <p class="subtitle2">About the Database Group</p> -->
      </div>
    </div>
    <div class="about">
      <p class="asubtitle">About Us</p>
      <div class="dgimg">
        <el-carousel
          width="788px"
          height="460px"
          direction="vertical"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <img :src="`/academicpage/image/${item}.png`" alt="" style="width: 100%; height: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="dgoverlay"></div>
      <p class="dgWord">
        Research directions:
        <br><br>
        <span class="dgword">
          Efficient Algorithms for Geographic Information Systems<br>
          Efficient Algorithms for Large-scale Data Visualization<br>
          Efficient Query Processing for Spatial/Graph Databases<br>
          Distributed Algorithms for Spatial/Graph Databases<br>
          Development of Efficient Software Packages and System Prototypes
        </span>
        <br><br>
        In this group, we have published many papers in top-tier conferences and journals in the database/data management field, including SIGMOD, PVLDB, ICDE, TODS, VLDBJ, and TKDE. 
      </p>
    </div>
    <div class="member">
      <img src="/image/pic_blue.png" alt="" class="ellipse">
      <p class="mtitle">Faculty Members</p>
      <div class="line1" />
      <div class="line2" />
      <div class="teacher1" @click="navigateTochan">
        <div class="teacherbg">
          <p class="tname">Tsz Nam Chan</p>
          <p class="tintro">
            Distinguished Professor<br>
            BEng, PhD PolyU (HK), SrMIEEE, MACM<br>
            NSF for Excellent Young Scientists (Overseas)
          </p>
        </div>
        <img src="/image/chan.png" alt="" class="teacherimg" />
      </div>
      <div class="teacher2" @click="navigateTowu">
        <div class="teacherbg">
          <p class="tname">Dingming Wu</p>
          <p class="tintro">
            Associate Professor<br>
            B. Sc. HUST, M. Sc. PKU, Ph. D. AAU (DK)
          </p>
        </div>
        <img src="/image/wu.png" alt="" class="teacherimg" />
      </div>
    </div>
    <div class="recruitment">
      <div class="recruitmentbg" />
      <p class="rtitle">Recruitment</p>
      <p class="rintro">
        Our database group is now hiring an assistant professor and an associate researcher (副研究员). Interested applicants<br><br>
        (1) should have strong academic background in database research or other related fields (e.g., publish papers in prestigious conferences and journals (e.g., CCF: A and CSranking)<br><br>
        (2) must show independent research skills and<br><br>
        (3) must show strong presentation skills. Applicants who successfully join this research group are expected to work with us and other members in Big Data Institute.
      </p>
      <p class="rinvite">
        If you are interested in joining us, please contact us via these two email addresses, which are
        <span style="color: #0072CB;">(1) edisonchan2013928@gmail.com (Dr. Tsz Nam Chan)</span> and
        <span style="color: #0072CB;">(2) dingming.wu@gmail.com (Dr. Dingming Wu).</span>
      </p>
      <p class="rsubtitle">Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).</p>
      <img src="/image/pic_recruitment.png" alt="" class="rimg">
    </div>
  </div>
</template>

<script setup lang="ts">
const navigateTochan = () => {
  const currentUrl = window.location.href;
  const newUrl = currentUrl + 'chan';
  window.open(newUrl, '_self');
};

const navigateTowu = () => {
  const currentUrl = window.location.href;
  const newUrl = currentUrl + 'wu';
  window.open(newUrl, '_self');
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
  height: 3210px;
  background: #F1F7FA;
}
.home{
  width: 100%;
  height: 2873px;
  background: #F1F7FA;
}
.image-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 710px;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: linear-gradient( 180deg, #0163AE 49%, rgba(112,188,246,0) 88%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient( 180deg, rgba(122,188,238,0.83) 0%, rgba(122,188,238,0.5) 31%, rgba(186,225,255,0.3) 90%, rgba(222,241,255,0) 100%);
}

.title {
  position: absolute;
  margin: 136px 0 211px 0;
  color: #000000;
  width: 100%;
  height: 363px;
  font-weight: 400;
  font-size: 300px;
  line-height: 352px;
  letter-spacing: 225px;
  text-align: center;
}

.title::after {
  content: '';
  display: inline-block;
  width: 0;
  margin-right: -225px;
}

.subtitle {
  position: absolute;
  margin: 466px 0 179px 0;
  width:100%;
  height: 65px;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 4px;
  text-align: center;
}

.subtitle::after {
  content: '';
  display: inline-block;
  width: 0;
  margin-right: -20px;
}

.subtitle2 {
  position: absolute;
  margin: 654px 0 24px 0;
  margin-left: 8%;
  width: auto;
  height: 32px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

.about {
  max-width: 1152px;
  width: 100%;
  height: 460px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.asubtitle {
  position: absolute;
  margin-top: -64px;
  /* margin-left: 144px; */
  width: auto;
  height: 32px;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
}
.dgoverlay{
  position: absolute;
  width: 788px;
  height: 460px;
  mask-image: linear-gradient( 90deg, rgba(150,160,168,0.21) 57%, rgba(216,221,225,0.71) 88%, rgba(255,255,255,0.75) 100%);
  border-radius: 0px 0px 0px 0px;
}

.dgimg {
  width: 610px;
  height: 460px;
  background: #F1F7FA;
  position: absolute;
  mask-image: linear-gradient( 91deg, #FFFFFF 0%, #FFFFFF 83%, rgba(255,255,255,0) 100%);
  border-radius: 15px 0px 0px 15px;
}

.dgWord {
  margin: 36px 0 36px 633px;
  position: absolute;
  height: 389px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-align: left;
  overflow: auto;
  scrollbar-width: none;
}

.dgword {
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: left;
}

.member {
  position: relative;
  margin-top: 104px;
  width: 1152px;
  max-width: 100%;
  height: 615px;
  background: #F1F7FA;
  margin-left: auto;
  margin-right: auto;
}

.ellipse {
  position: absolute;
  margin-left: 385px;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%); */
  /* border-radius: 50px; */
}

.mtitle {
  position: absolute;
  margin-top: 21px;
  width: 100%;
  height: 32px;
  font-weight: 600;
  font-size: 40px;
  line-height: 32px;
  text-align: center;
}

.line1 {
  position: absolute;
  margin: 69px 0 0 711px;
  width: 32px;
  border: 1px solid #000000;
}

.line2 {
  position: absolute;
  margin: 77px 0 0 625px;
  width: 118px;
  border: 1px solid #000000;
}

.teacher1 {
  position: absolute;
  margin-top: 137px;
  left: 0;
  width: calc((100% - 114px) / 2);
  height: 478px;
  cursor: pointer;
}

.teacher2 {
  position: absolute;
  margin-top: 137px;
  right: 0;
  width: calc((100% - 114px) / 2);
  height: 478px;
  cursor: pointer;
}

.teacherimg {
  position: absolute;
  margin-left: 274px;
  margin-right: 48px;
  width: 228px;
  height: 228px;
  object-fit: cover;
  mask-image: radial-gradient(circle, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 71%);
}
.teacherbg {
  position: absolute;
  margin-top: 102px;
  width: 100%;
  height: 376px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}

.tname {
  position: absolute;
  margin: 114px 0 0 64px;
  height: 32px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

.tintro {
  position: absolute;
  margin: 188px 0 0 64px;
  height: 119px;
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
}

.recruitment {
  position: relative;
  margin-top: 96px;
  width: 1152px;
  max-width: 100%;
  height: 809px;
  /* background:#91C7F5; */
  margin-left: auto;
  margin-right: auto;
}

.recruitmentbg {
  position: absolute;
  margin-left: 272px;
  width: calc(100% - 272px);
  height: 714px;
  background: linear-gradient( 90deg, rgba(255,255,255,0) 0%, #D8EDFF 100%);
  border-radius: 0px 10px 10px 0px;
}

.rtitle {
  position: absolute;
  margin-top: 64px;
  height: 32px;
  font-weight: 600;
  font-size: 40px;
  line-height: 32px;
}

.rintro {
  position: absolute;
  margin-top: 160px;
  width: calc(100% - 584px);
  height: 358px;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  line-height: 30px;
}

.rinvite {
  position: absolute;
  margin-top: 583px;
  width: calc(100% - 164px);
  height: 59px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}

.rsubtitle {
  position: absolute;
  bottom: 0px;
  height: 15px;
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  line-height: 14px;
}

.rimg {
  position: absolute;
  margin: 160px 0 0 633px;
  width: 519px;
  height: 388px;
}
</style>