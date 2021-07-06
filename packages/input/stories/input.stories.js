import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<xg-input v-model="value"></xg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<xg-input type="password" v-model="value"></xg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
