#import "RTNDeviceNameSpec.h"
#import "RTNDeviceName.h"

#import <UIKit/UIKit.h>

@implementation RTNDeviceName

RCT_EXPORT_MODULE()

- (void)getDeviceName:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSString *deviceName = [UIDevice currentDevice].name;
    resolve(deviceName);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeDeviceNameSpecJSI>(params);
}

@end
