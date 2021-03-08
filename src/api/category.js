import request from "@/utils/request";

async function getCategoriesById(id) {
    let result = [];
    await request({
        url: 'api/category/' + id,
        method: 'get',
    }).then(response => {
        response.data.forEach(category=>{
            if (category.parentId === 0)
                result.push({
                    id: category.id,
                    label: category.name,
                    children: []
                })
        })
        response.data.forEach(category=>{
            if (category.parentId !== 0){
                result.find(c=>c.id === category.parentId).children.push({
                    id: category.id,
                    label: category.name,
                    children: []
                });
            }
        })
    });
    return result;
}

export function getTcmCategories() {
    return getCategoriesById(1);
}


export function getSymptomCategories() {
    return getCategoriesById(2);
}