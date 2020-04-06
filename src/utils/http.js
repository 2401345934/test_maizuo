import axiox from "axios";


const instance = axiox.create({
  baseURL: "https://m.maizuo.com",  //基本的url
  timeout: 10000, //10秒延时
  headers: { "X-Client-Info": "{ \"a\": \"3000\", \"ch\": \"1002\", \"v\": \"5.0.4\", \"e\": \"15852972781030792151301\", \"bc\": \"310100\" }" }
});

const instance2 = axiox.create({
  baseURL: "/info",  //基本的url
  timeout: 10000 //10秒延时
});

instance2.interceptors.request.use(
  (config) => {

    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");
    }
    return config;
  }
);


instance2.interceptors.response.use((res) => {

  if (res.data.err === 0) {
    return res.data;
  } else {
    return Promise.reject(res.data.msg);
  }

  return res;
});

export { instance, instance2 };