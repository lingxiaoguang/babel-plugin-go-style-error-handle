async function fun(){
    const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('err'));
        },1000);
    });
    console.log(res);
    return res;
}
