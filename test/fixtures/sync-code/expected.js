async function fun() {
    const res = await(async () => {
        try {
            return { result: await JSON.parse('//') };
        } catch (e) {
            return { error: e, result: null };
        }
    })();;
    console.log(res);
    return res;
}