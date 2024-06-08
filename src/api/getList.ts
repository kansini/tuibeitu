import $http from "./index"


const getList = (url: string) => {
    return $http.get(url)

}
export {getList}
