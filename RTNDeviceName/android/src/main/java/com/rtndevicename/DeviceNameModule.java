package com.rtndevicename;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtndevicename.NativeDeviceNameSpec;

import android.os.Build;

public class DeviceNameModule extends NativeDeviceNameSpec {

    public static String NAME = "RTNDeviceName";

    DeviceNameModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void getDeviceName(Promise promise) {
        promise.resolve(Build.MODEL);
    }
}