import { IonicNativePlugin } from '@ionic-native/core';
export declare class AprilisDeviceQnscale extends IonicNativePlugin {
    /**
     * 장치와 연결한다.
     * @param deviceId 장치 아이디 (안드로이드 : 맥주소, ios : uuid)
     * @param connectionTimeoutSec 연결 타임아웃 시간 (초)
     * @param userId 사용자 아이디
     * @param gender 성별
     * @param year 생년
     * @param height 키
     */
    connect(deviceId: string, connectionTimeoutSec: number, userId: string, gender: 'male' | 'female', year: number, height: number): Promise<string>;
    /**
     * 장치와 데이터를 동기화 한다.
     */
    syncData(): Promise<string>;
    /**
     * 장치와의 연결을 해제한다.
     * @param deviceId 장치 아이디 (안드로이드 : 맥주소, ios : uuid)
     */
    disconnect(): Promise<string>;
}
/**
 * 응답 클래스
 */
export declare class AprilisDeviceQnscaleResponse {
    result: boolean;
    message: string;
    data: any;
}
