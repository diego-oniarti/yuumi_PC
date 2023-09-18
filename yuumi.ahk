#Requires AutoHotkey v2.0
#UseHook

+q::
+w::
+e::
+r::
+t::
+a::
+s::
+d::
+f::
+x::
+c::
+1::
+2::
+3::
+4::
+5::
+6::
+7::
+b::
{
    key := SubStr(A_ThisHotkey,2)
    try {
        apiUrl := <laptop ip> . ":2357/keypress?key=" . key
        localFilePath := <garbage file path>
        Download(apiUrl, localFilePath)
    }
}