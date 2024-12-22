import { config } from '@vue/test-utils';

// Vue Test Utils 전역 설정을 초기화하거나 최소 설정
config.global.stubs = {
  transition: false, // 불필요한 트랜지션 제거
};