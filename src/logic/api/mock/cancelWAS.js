const initialCancel = ['팀행사준비', '독후감작성', '오전반차'];
let cancel = [...initialCancel];


// 테스트용: 배열을 초기 상태로 리셋
export async function resetCancelMock() {
    cancel = [...initialCancel];
}

export async function getCancel(param) {
    return cancel;
}

export async function addCancel(param) {
    cancel.push(param);
    return cancel;
}

export async function addCancels(param) {
    param.forEach(item => {
        cancel.push(item);
    });
    return cancel;
}

export async function deleteCancel(param) {
    const index = cancel.findIndex(item => item === param);
    if (index !== -1) {
        cancel.splice(index, 1);
    }
    return cancel;
}

export async function deleteCancels(param) {
    param.forEach(target => {
        const index = cancel.findIndex(item => item === target);
        if (index !== -1) {
            cancel.splice(index, 1);
        }
    });
    return cancel;
}

