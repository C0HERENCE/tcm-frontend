import request from "@/utils/request";

export async function SearchInSubPage(data) {
    let response = []
    await request({
        url: 'api/search/herbGuide',
        method: 'post',
        data: data
    }).then(res=>response = res.data);
    console.log(response)
    let sum = 0;
    response.forEach(r=>sum+=r.data.length);
    return {
        total: sum,
        result: response
    }
}