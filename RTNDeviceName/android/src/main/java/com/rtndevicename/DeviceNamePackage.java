package com.rtndevicename;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.TurboReactPackage;

import java.util.Collections;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

public class DeviceNamePackage extends TurboReactPackage {

  @Nullable
  @Override
  public NativeModule getModule(String name, ReactApplicationContext reactContext) {
     if (name.equals(DeviceNameModule.NAME)) {
         return new DeviceNameModule(reactContext);
     } else {
          return null;
     }
  }


  @Override
  public ReactModuleInfoProvider getReactModuleInfoProvider() {
     return () -> {
         final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();
         moduleInfos.put(
                 DeviceNameModule.NAME,
                 new ReactModuleInfo(
                         DeviceNameModule.NAME,
                         DeviceNameModule.NAME,
                         false, // canOverrideExistingModule
                         false, // needsEagerInit
                         true, // hasConstants
                         false, // isCxxModule
                         true // isTurboModule
         ));
         return moduleInfos;
     };
  }
}
