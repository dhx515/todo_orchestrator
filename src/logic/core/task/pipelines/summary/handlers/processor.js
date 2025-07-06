import { fetchSummaryData} from '@/logic/api/summary/api';


export async function fetchSummary(dataStorage, param) {
    const summary = await fetchSummaryData(param);

    dataStorage.setSummary(summary);
}