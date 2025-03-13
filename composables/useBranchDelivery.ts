export const useBranchDelivery = () => {
    const getBranch = async()=>{
        const req = await $fetch('https://bio.makimuraramen.com/api/branches')
        return req
    };
    const getIntervals = async()=>{

    };

    return {
        getBranch,
        getIntervals
    }
}