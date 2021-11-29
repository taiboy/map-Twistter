<template>
  <div class="board">
    <q-page class="q-pa-lg">
      <h4 class="q-mt-none q-mb-md text-weight-bold">About Saigai-app</h4>
      <div class="text-body1">
        <h5>Saigai-appとは</h5>
        <div class="texts">
          <p>災害に特化した情報共有システム</p>
        </div>
        <h5>機能</h5>
        <div class="texts">
          <p>1. 危険地域・警戒地域を可視化</p>
          <p>2. 災害時の情報共有サービス</p>
          <p>3. 迷子・行方不明者の掲示板</p>
          <p>4. 災害物資の支援予定</p>
          <p>5. 混雑状況、衛生状態の見える化</p>
          <p>6. ガスの供給量の見える化</p>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
export default {
  name: 'PageAbout'
}
</script>
<style scoped>
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
}
h4::before,
h4::after {
  content: "";
  width: 20px;
  height: 20px;
}
h4::before {
  margin: -30px 20px 0 0;
  border-top: 10px solid #0277B4;
  border-left: 10px solid #00A7FF;
}
h4::after {
  margin: 0 0 -30px 20px;
  border-right: 10px solid #00A7FF;
  border-bottom: 10px solid #0277B4;
}
h5 {
  padding: 1rem 2rem;
  border-top: 3px dashed #0277B4;
  border-bottom: 3px dashed #0277B4;
  text-align: center;
  margin: 10%;
  font-weight: bolder;
}
.texts {
  text-align: center;
}
.board {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,.2);
  margin: 5%;
  background-color: rgb(29,161,241,0.05);
}
</style>
