<template>
  <div class="status">
    <div class="status_inner">
      <ul class="status_list">
        <li v-for="item in skillList" v-bind:key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillList: [
        {
          title: 'Java',
          desc: 'Java EEやSpring Bootは1社目で業務システムを開発経験あり',
        },
        {
          title: 'PHP',
          desc:
            '1社目では生PHPと独自FWを使用し業務システムを開発、2社目ではWordPressのプラグインやテーマの開発経験あり',
        },
        {
          title: 'SQL',
          desc: '色々広く触っていますが、一番よく触っているのはMySQLです。',
        },
        {
          title: 'ShellScript',
          desc: '1社目でPowerShellとBashを使って開発経験あり',
        },
        {
          title: 'HTML',
          desc:
            'Hamlなども使った事があります。構造を意識してマークアップしてます。',
        },
        {
          title: 'CSS',
          desc:
            'SassやSCSSをメインで実務で使っています。設計手法はBEMを用いてます。',
        },
        {
          title: 'JavaScript',
          desc:
            'JavaScriptやjQueryは実務経験あり。Vue.jsは業務外の時間で勉強中です。',
        },
        {
          title: 'Git',
          desc:
            'GitHubやTortoiseGitは実務で使用経験あり。現職ではBacklogのGitでソースコードを管理しています。',
        },
        {
          title: 'Docker',
          desc:
            '前職でも現職でも実務経験あり。現職ではDockerを新しく実際に導入し部署内の開発環境を整えました。',
        },
        {
          title: 'Adobe',
          desc:
            'Illustrator・Photoshop・XDは実務経験あり。グラフィックデザインやサイトのデザイン制作なども経験あり',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.status {
  text-align: left;
  .status_list {
    > li {
      font-family: '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3',
        'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
      border: 2px solid $black;
      margin-top: 16px;
      padding: 8px;
    }
  }
}

@keyframes flash {
  50% {
    opacity: 0.5;
  }
}
</style>