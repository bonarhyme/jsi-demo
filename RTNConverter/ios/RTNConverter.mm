#import "RTNConverterSpec.h"
#import "RTNConverter.h"

@implementation RTNConverter

RCT_EXPORT_MODULE()

- (void)inchesToCentimeters:(double)inches resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:inches*2.54];
    resolve(result);
}

- (void)centimetersToInches:(double)centimeters resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:centimeters/2.54];
    resolve(result);
}

- (void)inchesToFeet:(double)inches resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:inches/12];
    resolve(result);
}

- (void)feetToInches:(double)feet resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:feet*12];
    resolve(result);
}

- (void)kilometersToMiles:(double)kilometers resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:kilometers/1.609];
    resolve(result);
}

- (void)milesToKilometers:(double)miles resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:miles*1.609];
    resolve(result);
}

- (void)feetToCentimeters:(double)feet resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:feet*30.48];
    resolve(result);
}

- (void)centimetersToFeet:(double)centimeters resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:centimeters/30.48];
    resolve(result);
}

- (void)yardsToMeters:(double)yards resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:yards/1.094];
    resolve(result);
}

- (void)metersToYards:(double)meters resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:meters*1.094];
    resolve(result);
}

- (void)milesToYards:(double)miles resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:miles*1760];
    resolve(result);
}

- (void)yardsToMiles:(double)yards resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:yards/1760];
    resolve(result);
}

- (void)feetToMeters:(double)feet resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:feet/3.281];
    resolve(result);
}

- (void)metersToFeet:(double)meters resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithDouble:meters*3.281];
    resolve(result);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeConverterSpecJSI>(params);
}

@end