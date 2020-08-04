<template>
  <div class="command">
    <div class="command_inner">
      <ul class="command_list">
        <li v-if="isDefaultFlg">
          <button class="cmd-01" @click="clickCmd01">はなす</button>
        </li>
        <li v-if="cmd01Flg" class="row-max">
          <p>{{talk[talkCount]}}</p>
          <span v-if="talkCount <= talk.length" @click="clickTalkBtn" class="command-mark"></span>
          <span v-if="talkCount === talk.length -1" @click="clickBackBtn" class="command-mark"></span>
        </li>
        <li v-if="isDefaultFlg">
          <button class="cmd-02">つよさ</button>
        </li>
        <li v-if="isDefaultFlg" @click="clickCmd03">
          <button class="cmd-03">じゅもん</button>
        </li>
        <li v-if="cmd03Flg" class="row-max">
          <p>まだおぼえていないようだ</p>
          <span @click="clickBackBtn" class="command-mark"></span>
        </li>
        <li v-if="isDefaultFlg">
          <button @click="clickCmd04" class="cmd-04">にげる</button>
        </li>
        <li v-if="cmd04Flg">
          <a href="https://github.com/tsukikoko" target="_blank">GitHub</a>
        </li>
        <li v-if="cmd04Flg">
          <a href="https://spotify-now-playing.netlify.app/" target="_blank">なうぷれ</a>
        </li>
        <li v-if="cmd04Flg">
          <a href="https://tahara-tsukiko-resume.netlify.app/" target="_blank">レジュメ(簡易版)</a>
        </li>
        <li v-if="!isDefaultFlg && isShowBackBtnFlg">
          <button @click="clickBackBtn">もどる</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDefaultFlg: true,
      isShowBackBtnFlg: false,
      cmd01Flg: false,
      cmd02Flg: false,
      cmd03Flg: false,
      cmd04Flg: false,
      talkCount: 0,
      talk: ['talk1', 'talk2', 'talk3'],
    };
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
  },
  methods: {
    clickCmd01() {
      this.resetFlg();
      this.cmd01Flg = true;
    },
    clickCmd03() {
      this.resetFlg();
      this.cmd03Flg = true;
    },
    clickCmd04() {
      this.resetFlg();
      this.cmd04Flg = true;
      this.isShowBackBtnFlg = true;
    },
    clickBackBtn() {
      this.resetFlg();
      if (!this.isDefaultFlg) {
        this.isDefaultFlg = true;
        this.cmd04Flg = false;
      }
    },
    clickTalkBtn() {
      if (this.talk.length == this.talkCount + 1) {
        this.talkCount = 0;
        resetFlg();
      } else {
        this.talkCount++;
      }
    },
    resetFlg() {
      this.cmd01Flg = false;
      this.cmd02Flg = false;
      this.cmd03Flg = false;
      this.cmd04Flg = false;
      this.isDefaultFlg = false;
      this.isShowBackBtnFlg = false;
      this.talkCount = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.command {
  width: 90%;
  background-color: $black;
  border: 3px double #fff;
  color: #fff;
  margin-top: 16px;
  padding: 8px;
  @media #{$mq_pc} {
    min-height: 116px;
  }
  .command_inner {
    min-height: 100px;
    border: 3px double #fff;
    padding: 16px;
  }
  .command_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      position: relative;
      display: inline-block;
      min-width: 50%;
      line-height: 1.8;
      &.row-max {
        width: 100%;
      }
      a,
      button {
        @media #{$mq_pc} {
          &:hover,
          &:focus {
            animation: flash 0.8s ease-in-out infinite alternate;
          }
        }
      }
    }
  }
  .command-mark {
    &::after {
      content: '▼';
      display: block;
      position: absolute;

      right: -5px;
      cursor: pointer;
      animation: flash 0.8s ease-in-out infinite alternate;
      @media #{$mq_pc} {
        bottom: 5px;
      }
      @media #{$mq_tab} {
        top: 5px;
      }
    }
  }
}
@keyframes flash {
  50% {
    opacity: 0.5;
  }
}
</style>