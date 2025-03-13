export const useBranchDelivery = () => {
    const getBranch = async()=>{
        const req = await $fetch('https://bio.makimuraramen.com/api/branches')
        return req
    };
    const getIntervals = async(date:string, branch:string)=>{
        if(date.trim().length != 0){
            const req = await $fetch(`https://bio.makimuraramen.com/api/branch/${branch}/intervals?date=${date}`)
            return req
        }
    };

    return {
        getBranch,
        getIntervals
    }
}