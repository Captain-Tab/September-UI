const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/Tab'
import TabsHead from '../src/TabHead'
import TabsBody from '../src/TabBody'
import TabsItem from '../src/TabItem'
import TabsPanel from '../src/TabPanel'

Vue.component('s-tab', Tab)
Vue.component('s-tab-head', TabsHead)
Vue.component('s-tab-body', TabsBody)
Vue.component('s-tab-item', TabsItem)
Vue.component('s-tab-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {

    it('存在.', () => {
        expect(Tab).to.exist
    })

    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <s-tab selected="finance">
        <s-tab-head>
          <s-tab-item name="woman"> 美女 </s-tab-item>
          <s-tab-item name="finance"> 财经 </s-tab-item>
          <s-tab-item name="sports"> 体育 </s-tab-item>
        </s-tab-head>
        <s-tab-body>
          <s-tab-panel name="woman"> 美女相关资讯 </s-tab-panel>
          <s-tab-panel name="finance"> 财经相关资讯 </s-tab-panel>
          <s-tab-panel name="sports"> 体育相关资讯 </s-tab-panel>
        </s-tab-body>
      </s-tab>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tab-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
})
