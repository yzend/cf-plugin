<template>
  <div class="calculate">
    <p>{{x}} + {{y}} = {{sum}}</p>
  </div>
</template>

<script>
  export default({
    name: 'addFunc',
    props: ['num1', 'num2'],
    data() {
      return{
        x: this.num1 ? this.num1 : 0,
        y: this.num2 ? this.num2 : 0,
        sum: 0,
      }
    },
    mounted () {
      this.sumFunc()
    },
    methods:{
      sumFunc() {
        let x = Number(this.x)
        let y = Number(this.y)
        if(isNaN(x) || isNaN(y)) {
          return
        }else{
          this.sum = x + y
          this.$emit('getSumFromChild',this.sum)
        }
      }
    }
  })
</script>

<style>
.calculate{
  width: 100%;
  line-height: 26px;
}
</style>