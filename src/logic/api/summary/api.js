import { getSummary } from '../mock/summaryWAS';


export async function fetchSummaryData(param) {
    return getSummary(param);
}