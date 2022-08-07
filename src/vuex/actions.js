import axios from 'axios';
import qs from 'qs';

// const baseURL = 'https://www.camptogo.com';

export const pro_create = ({ commit }, data) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        let id = 0;
        console.log(data.exclusive);
        axios.post(
            '/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/create',
            qs.stringify({'name': data.name,
                    'describe': data.desc,
                    'mobile': data.mobile,
                    'email': data.email,
                    'wechat': data.wechat,
                    'exclusive': data.exclusive}),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa('testeradmin' + ':' + 'testerpassword')
                }
            }).then(res => {
                console.log(res.data);
                console.log(res);
             id = res.data.details.id;
             console.log(id);
            commit('SET_PROVIDER', {data, id});
        }).catch(err => {
            console.log(err);
        });
    })
}

export const pro_get = ({ commit }, id) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        let data = {};
        axios.post(
            '/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/get',
            qs.stringify({'id': id}),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa('testeradmin' + ':' + 'testerpassword')
                }
            }).then(res => {
            data = res.data.details;
        }).catch(err => {
            console.log(err);
        });
        commit('SET_PROVIDER', {data, id});
    })
}

export const pro_update = ({ commit }, data) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {

        axios.post(
            '/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/update',
            qs.stringify({
                'id': data.id,
                'name': data.name,
                'describe': data.desc,
                'mobile': data.mobile,
                'email': data.email,
                'wechat': data.wechat,
                'exclusive': data.exclusive}),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa('testeradmin' + ':' + 'testerpassword')
                }
            }).then(res => {
            data = res.data;
        }).catch(err => {
            console.log(err);
        });
        commit('SET_PROVIDER', data, data.id);
    })
}

export const avator_upload = ({data, id}) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('avator_square', data);
        axios.post(
            '/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/avatar_square/upload',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Basic ' + btoa('testeradmin' + ':' + 'testerpassword')
                }
            }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    })
}

export const honor_upload = ({data, id}) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('imagename1', data[0]);
        formData.append('imagename2', data[1]);
        formData.append('imagename3', data[2]);
        axios.post(
            '/api/test/72b88c04309911ec8d3d0242ac130003/v1_0_0/testprovider/honor/upload',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Basic ' + btoa('testeradmin' + ':' + 'testerpassword')
                }
            }).then(res => {
                console.log(res);
        }).catch(err => {
            console.log(err);
        });
    })
}
