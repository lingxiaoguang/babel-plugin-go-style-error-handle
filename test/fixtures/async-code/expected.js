async function fun() {
    const res = await(async () => {
        try {
            return { result: await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(new Error('err'));
                    }, 1000);
                }) };
        } catch (e) {
            return { error: e, result: null };
        }
    })();;
    console.log(res);
    return res;
}
