import { fetchSummaryData} from '@/logic/api/summary/api';


export async function fetchSummary(state, param) {
    const summary = await fetchSummaryData(param);

    state.value = summary;
}