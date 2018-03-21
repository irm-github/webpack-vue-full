<template lang="html">
<div class="layout">
  <Layout :style="{minHeight: '100vh'}">
    <Sider class="layout-sider">
      <Menu theme="dark" active-name="1" width="auto">
        <MenuGroup title="内容管理">
          <MenuItem name="1">
            <Icon type="document-text"></Icon>
            文章管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="chatbubbles"></Icon>
            评论管理
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer">2018 © 版权信息</Footer>
    </Layout>
  </Layout>
</div>
</template>

<script>
export default {}
</script>

<style lang="less">
// 放置需要重载的样式
.ivu-menu-vertical .ivu-menu-item-group-title {
  padding-left: 10px;
}

</style>

<style lang="less" scoped>
@import '../../assets/styles/config.less';

.layout-sider {
  padding: 64px 0 0;
}

.layout-footer {
    text-align: center;
    font-size: 12px;
    .cfg-tip-text;
}
</style>
