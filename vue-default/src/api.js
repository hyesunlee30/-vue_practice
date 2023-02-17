import axios from 'axios';

export  default {
    mounted() {
        console.log('컴포넌트 mounted()');
    },
    methods: {
        async $callAPI(url, method, data) {
            return (
                await axios({
                    method: method,
                    url: url,
                    data: data,
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
        }
    }
}
