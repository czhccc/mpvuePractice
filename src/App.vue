<script>
  import {request} from './utils/index'
  export default {
    async mounted(){
      // 调用接口获取登录凭证(code)。通过凭证进而换取用户登录态信息，包括用户的唯一标识(openid)及本次登录的会话密钥(session_key)等。用户数据的加解密通讯需要依赖会话密钥完成。
      wx.login({
        success: async (res) => {
          // 1. 获取用户登陆的临时凭证, 和用户是否授权没有直接关系  有效时长： 有效期五分钟
          let code = res.code

          // 2. 发送code给服务器端
          let token = await request('/getOpenId', {code}) // 获取自定义登录状态

          // 3. 将自定义登录状态缓存到storage中
          wx.setStorageSync('token', token);
        }
      })

      // 测试地址token
      let result = await request('/test')
      console.log('验证结果： ', result);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%
    height 100%
</style>
