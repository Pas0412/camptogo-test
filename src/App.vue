<template>
  <div class="container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="主理人姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="form.desc" type="divarea" />
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.mobile" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.wechat" />
      </el-form-item>

      <el-form-item label="是否为独立商户">
        <el-select v-model="form.exclusive" placeholder="please select your answer">
          <el-option label="是" value="True" />
          <el-option label="否" value="False" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button type="primary" @click="onGet">Get</el-button>
        <el-button type="primary" @click="onUpdate">Update</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="get" v-if="isGot == true">
    <div>{{ form.id }}</div>
    <div>{{ form.name }}</div>
    <div>{{ form.desc }}</div>
    <div>{{ form.mobile }}</div>
    <div>{{ form.email }}</div>
    <div>{{ form.wechat }}</div>
    <div>{{ form.exclusive }}</div>
  </div>
  <div class="block" style="height: 150px"></div>
  <div class="images">
    <el-upload
        :file-list="file"
        class="upload-demo"
        action="/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/avatar_square/upload"
        :limit="1"
        :disabled="this.isLimited"
        @click="changeDisableValue"
    >
      <el-button type="primary" >Avator upload</el-button>
      <el-button type="primary" @click="onAvator">Submit</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
    <div class="block" style="height: 50px"></div>
    <el-upload
        :file-list="fileList"
        class="upload-demo"
        action="/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/honor/upload"
        multiple
        :limit="3"
        @click="onHonor"
    >
      <el-button type="primary">Honor upload</el-button>
      <el-button type="primary" @click="onHonor">Submit</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload></div>
</template>

<script>
import { reactive } from 'vue';
import store from '@/vuex/store';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'App',
    components: {},
    data () {
      return {
        file: [],
        fileList: [],
        isGot: false,
        isLimited: false,
        form : reactive({
          id: 0,
          name: '',
          mobile: '',
          email: '',
          wechat: '',
          desc: '',
          exclusive: 'True',
      })
    }
  },
  computed: {
    ...mapState(['Provider', 'fid'])
  },
  methods: {
    ...mapActions(['pro_create', 'pro_get', 'pro_update', 'avator_upload', 'honor_upload']),
    ...mapMutations(['SET_PROVIDER']),
    onSubmit () {
      this.pro_create(this.form);
    },
    onGet () {
      console.log(this.form);
      this.form.id = this.fid;
      this.pro_get(this.form.id);
      this.isGot = true;
    },
    changeDisableValue () {
      this.isLimited = true;
    },
    onUpdate () {
      this.pro_update(this.form); // 仅更新最初提交的id的数据
    },
    onAvator () {
      this.avator_upload(this.file, this.fid);
    },
    onHonor () {
      this.honor_upload(this.fileList, this.fid);
    }
  },
  store
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  div-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.get {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.images {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
</style>
