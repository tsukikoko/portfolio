<template>
  <transition>
    <div class="slime scale-up">
      <div class="slime_body"></div>
    </div>
  </transition>
</template>
<style scoped lang="scss">
.slime {
  position: relative;
  width: 175px;
  margin-top: 30px;
  min-height: 200px;
  overflow: hidden;
}
.slime_body {
  position: absolute;
  box-shadow: 70px 10px 0 0 #000000, 80px 10px 0 0 #000000,
    90px 10px 0 0 #000000, 100px 10px 0 0 #000000, 110px 10px 0 0 #000000,
    50px 20px 0 0 #000000, 60px 20px 0 0 #000000, 70px 20px 0 0 #000000,
    80px 20px 0 0 #03a9f4, 90px 20px 0 0 #03a9f4, 100px 20px 0 0 #03a9f4,
    110px 20px 0 0 #03a9f4, 120px 20px 0 0 #000000, 40px 30px 0 0 #000000,
    50px 30px 0 0 #03a9f4, 60px 30px 0 0 #03a9f4, 70px 30px 0 0 #03a9f4,
    80px 30px 0 0 #03a9f4, 90px 30px 0 0 #03a9f4, 100px 30px 0 0 #03a9f4,
    110px 30px 0 0 #03a9f4, 120px 30px 0 0 #000000, 130px 30px 0 0 #000000,
    140px 30px 0 0 #000000, 30px 40px 0 0 #000000, 40px 40px 0 0 #000000,
    50px 40px 0 0 #03a9f4, 60px 40px 0 0 #03a9f4, 70px 40px 0 0 #03a9f4,
    80px 40px 0 0 #03a9f4, 90px 40px 0 0 #03a9f4, 100px 40px 0 0 #03a9f4,
    110px 40px 0 0 #03a9f4, 120px 40px 0 0 #03a9f4, 130px 40px 0 0 #03a9f4,
    140px 40px 0 0 #000000, 30px 50px 0 0 #000000, 40px 50px 0 0 #03a9f4,
    50px 50px 0 0 #03a9f4, 60px 50px 0 0 #03a9f4, 70px 50px 0 0 #03a9f4,
    80px 50px 0 0 #03a9f4, 90px 50px 0 0 #03a9f4, 100px 50px 0 0 #03a9f4,
    110px 50px 0 0 #03a9f4, 120px 50px 0 0 #03a9f4, 130px 50px 0 0 #03a9f4,
    140px 50px 0 0 #000000, 150px 50px 0 0 #000000, 20px 60px 0 0 #000000,
    30px 60px 0 0 #000000, 40px 60px 0 0 #03a9f4, 50px 60px 0 0 #03a9f4,
    60px 60px 0 0 #ffffff, 70px 60px 0 0 #03a9f4, 80px 60px 0 0 #03a9f4,
    90px 60px 0 0 #03a9f4, 100px 60px 0 0 #03a9f4, 110px 60px 0 0 #ffffff,
    120px 60px 0 0 #03a9f4, 130px 60px 0 0 #03a9f4, 140px 60px 0 0 #2196f3,
    150px 60px 0 0 #000000, 160px 60px 0 0 #000000, 10px 70px 0 0 #000000,
    20px 70px 0 0 #2196f3, 30px 70px 0 0 #03a9f4, 40px 70px 0 0 #03a9f4,
    50px 70px 0 0 #ffffff, 60px 70px 0 0 #000000, 70px 70px 0 0 #ffffff,
    80px 70px 0 0 #03a9f4, 90px 70px 0 0 #03a9f4, 100px 70px 0 0 #ffffff,
    110px 70px 0 0 #000000, 120px 70px 0 0 #ffffff, 130px 70px 0 0 #03a9f4,
    140px 70px 0 0 #03a9f4, 150px 70px 0 0 #2196f3, 160px 70px 0 0 #000000,
    10px 80px 0 0 #000000, 20px 80px 0 0 #2196f3, 30px 80px 0 0 #03a9f4,
    40px 80px 0 0 #03a9f4, 50px 80px 0 0 #03a9f4, 60px 80px 0 0 #ffffff,
    70px 80px 0 0 #03a9f4, 80px 80px 0 0 #03a9f4, 90px 80px 0 0 #03a9f4,
    100px 80px 0 0 #03a9f4, 110px 80px 0 0 #ffffff, 120px 80px 0 0 #03a9f4,
    130px 80px 0 0 #03a9f4, 140px 80px 0 0 #03a9f4, 150px 80px 0 0 #2196f3,
    160px 80px 0 0 #000000, 10px 90px 0 0 #000000, 20px 90px 0 0 #2196f3,
    30px 90px 0 0 #03a9f4, 40px 90px 0 0 #03a9f4, 50px 90px 0 0 #ff0000,
    60px 90px 0 0 #03a9f4, 70px 90px 0 0 #03a9f4, 80px 90px 0 0 #03a9f4,
    90px 90px 0 0 #03a9f4, 100px 90px 0 0 #03a9f4, 110px 90px 0 0 #03a9f4,
    120px 90px 0 0 #ff0000, 130px 90px 0 0 #03a9f4, 140px 90px 0 0 #03a9f4,
    150px 90px 0 0 #2196f3, 160px 90px 0 0 #000000, 10px 100px 0 0 #000000,
    20px 100px 0 0 #03a9f4, 30px 100px 0 0 #03a9f4, 40px 100px 0 0 #03a9f4,
    50px 100px 0 0 #03a9f4, 60px 100px 0 0 #ff0000, 70px 100px 0 0 #ff0000,
    80px 100px 0 0 #ff0000, 90px 100px 0 0 #ff0000, 100px 100px 0 0 #ff0000,
    110px 100px 0 0 #ff0000, 120px 100px 0 0 #03a9f4, 130px 100px 0 0 #03a9f4,
    140px 100px 0 0 #03a9f4, 150px 100px 0 0 #03a9f4, 160px 100px 0 0 #000000,
    10px 110px 0 0 #000000, 20px 110px 0 0 #03a9f4, 30px 110px 0 0 #03a9f4,
    40px 110px 0 0 #03a9f4, 50px 110px 0 0 #03a9f4, 60px 110px 0 0 #03a9f4,
    70px 110px 0 0 #03a9f4, 80px 110px 0 0 #03a9f4, 90px 110px 0 0 #03a9f4,
    100px 110px 0 0 #03a9f4, 110px 110px 0 0 #03a9f4, 120px 110px 0 0 #03a9f4,
    130px 110px 0 0 #03a9f4, 140px 110px 0 0 #03a9f4, 150px 110px 0 0 #03a9f4,
    160px 110px 0 0 #000000, 10px 120px 0 0 #000000, 20px 120px 0 0 #03a9f4,
    30px 120px 0 0 #03a9f4, 40px 120px 0 0 #03a9f4, 50px 120px 0 0 #03a9f4,
    60px 120px 0 0 #03a9f4, 70px 120px 0 0 #03a9f4, 80px 120px 0 0 #03a9f4,
    90px 120px 0 0 #03a9f4, 100px 120px 0 0 #03a9f4, 110px 120px 0 0 #03a9f4,
    120px 120px 0 0 #03a9f4, 130px 120px 0 0 #03a9f4, 140px 120px 0 0 #03a9f4,
    150px 120px 0 0 #03a9f4, 160px 120px 0 0 #000000, 10px 130px 0 0 #000000,
    20px 130px 0 0 #000000, 30px 130px 0 0 #03a9f4, 40px 130px 0 0 #03a9f4,
    50px 130px 0 0 #03a9f4, 60px 130px 0 0 #03a9f4, 70px 130px 0 0 #03a9f4,
    80px 130px 0 0 #03a9f4, 90px 130px 0 0 #03a9f4, 100px 130px 0 0 #03a9f4,
    110px 130px 0 0 #03a9f4, 120px 130px 0 0 #03a9f4, 130px 130px 0 0 #03a9f4,
    140px 130px 0 0 #03a9f4, 150px 130px 0 0 #03a9f4, 160px 130px 0 0 #000000,
    20px 140px 0 0 #000000, 30px 140px 0 0 #000000, 40px 140px 0 0 #03a9f4,
    50px 140px 0 0 #03a9f4, 60px 140px 0 0 #03a9f4, 70px 140px 0 0 #03a9f4,
    80px 140px 0 0 #03a9f4, 90px 140px 0 0 #03a9f4, 100px 140px 0 0 #03a9f4,
    110px 140px 0 0 #03a9f4, 120px 140px 0 0 #03a9f4, 130px 140px 0 0 #03a9f4,
    140px 140px 0 0 #03a9f4, 150px 140px 0 0 #000000, 160px 140px 0 0 #000000,
    30px 150px 0 0 #000000, 40px 150px 0 0 #000000, 50px 150px 0 0 #03a9f4,
    60px 150px 0 0 #03a9f4, 70px 150px 0 0 #03a9f4, 80px 150px 0 0 #03a9f4,
    90px 150px 0 0 #03a9f4, 100px 150px 0 0 #03a9f4, 110px 150px 0 0 #03a9f4,
    120px 150px 0 0 #03a9f4, 130px 150px 0 0 #03a9f4, 140px 150px 0 0 #000000,
    150px 150px 0 0 #000000, 50px 160px 0 0 #000000, 60px 160px 0 0 #000000,
    70px 160px 0 0 #000000, 80px 160px 0 0 #000000, 90px 160px 0 0 #000000,
    100px 160px 0 0 #000000, 110px 160px 0 0 #000000, 120px 160px 0 0 #000000,
    130px 160px 0 0 #000000;
  height: 10px;
  width: 10px;
}
.scale-up {
  animation: scale-up 0.8s;
}

@keyframes scale-up {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
