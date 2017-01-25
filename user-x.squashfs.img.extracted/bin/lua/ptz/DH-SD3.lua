-- 这是大华[云台串口通信三代协议]
local Protocol = {};

-- 表示数值可以用16或10进制(最小值，最大值)
Protocol.Attr = 
{
	-- 协议的显示名称,不能超过16字符，目前暂不支持中文
	Name = "DH-SD3",	
		
	-- 指明是云台协议还是矩阵协议，使用"PTZ", "MATRIX"表示
	Type = "PTZ",
	
	-- 以ms为单位
	Internal = 400,
				
	-- 没有对应的地址范围，请都设成0xFF
	-- 云台地址范围
	CamAddrRange 		= {0x01, 0xFF}, 
	-- 监视地址范围
	MonAddrRange		= {0x00, 0xFF},	
	-- 预置点范围
	PresetRange 		= {0x01, 300},
	-- 自动巡航线路范围
	TourRange			= {0x01, 8},
	-- 轨迹线路范围
	PatternRange		= {0x01, 5},
	-- 垂直速度范围
	TileSpeedRange 		= {0x01, 0xFF},
	-- 水平速度范围
	PanSpeedRange 		= {0x01, 0xFF},
	-- 自动扫描范围
	ScanRange 			= {0x01, 5},
	-- 辅助范围
	AuxRange 			= {0x01, 0xFF},
}

Protocol.CommandAttr =
{
	-- 协议中需要更改的位置，用LUA下标表示，即下标从１开始,用10进制表示
	AddrPos 	= 2, 
	PresetPos 	= 7, 
	TileSpeedPos 	= 10,
	PanSpeedPos 	= 8,
	AuxPos 		= 6,	
}

Protocol.Command = 
{
	-- 写具体协议时只能用16进制或字符表示,没有的话就注释掉
	Start= 
	{
		--写上下左右, 左上，左下，右上，右下	
		TileUp 		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		TileDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		PanLeft 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,", 
		PanRight 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		LeftUp 		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		LeftDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		RightUp		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		RightDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",

		ZoomWide 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		ZoomTele 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		FocusNear	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,",
		FocusFar 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,",
		IrisSmall 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		IrisLarge 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
			
		-- 翻转
		--Flip 		= "0xA5, 0x00, 0x87, 0x00, 0x0A, 0x00, 0x00",
		Reset 		= "0xA6, 0x00, 0x00, 0x0C, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,",	
			
		-- 灯光
		--LightOn		= "0xFF, 0x01, 0x88, 0x00, 0x00, 0x00, 0x00",
		--LightOff  	= "0xFF, 0x01, 0x08, 0x00, 0x00, 0x00, 0x00",
			
		-- 预置点操作（设置，清除，转置)
		SetPreset 	= "0xA6, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		ClearPreset	= "0xA6, 0x00, 0x00, 0x04, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",			
		GoToPreset 	= "0xA6, 0x00, 0x00, 0x04, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",			
			
		AutoPanOn		= "0xA6, 0x00, 0x00, 0x07, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		AutoPanOff		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		
		-- 线性扫描
		SetLeftLimit 	= "0xA6, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		SetRightLimit	= "0xA6, 0x00, 0x00, 0x05, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,",
		AutoScanOn 		= "0xA6, 0x00, 0x00, 0x05, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		AutoScanOff		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
			
		-- 自动巡航，一般指在预置点之间巡航

		AddTour 		= "0xA6, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",			
		DeleteTour 		= "0xA6, 0x00, 0x00, 0x06, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",			
		StartTour 		= "0xA6, 0x00, 0x00, 0x06, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",			
		StopTour 		= "0xA6, 0x00, 0x00, 0x06, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		ClearTour		= "0xA6, 0x00, 0x00, 0x06, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",

			
		-- 轨迹巡航, 一般指模式(设置开始，设置结束，运行，停止，清除模式
		SetPatternStart = "0xA6, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		SetPatternStop 	= "0xA6, 0x00, 0x00, 0x08, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		StartPattern 	= "0xA6, 0x00, 0x00, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		StopPattern		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		ClearPattern 	= "0xA6, 0x00, 0x00, 0x08, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		
		AuxOn 	= "0xA6, 0x00, 0x00, 0x09, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,",
		AuxOff 	= "0xA6, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
			
		-- 菜单相关操作
		Menu		= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuExit	= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuEnter	= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuEsc		= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuUp		= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuDown	= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x05, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuLeft	= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		MenuRight	= "0xA6, 0x00, 0x00, 0x0A, 0x00, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		
		-- 对于特殊的命令，可以自己定义特定信息，利用这个特定信息来处理
		Position 	= "0xA6, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		--精确定位
		PositionAbs = "0xA6, 0x00, 0x00, 0x80, 0x00, 0x00, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x08, 0x00, 0x00,",
		-- 持续移动命令
		ContinueStart = "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		
		-- 绝对移动命令
		AbsoluteStart = "0xA6, 0x00, 0x00, 0x80, 0x00, 0x00, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x08, 0x00, 0x00,",
		
		--移动停止命令(包括持续移动和绝对移动停止)
		ContinueStop = "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		AbsoluteStop = "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
	},
	Stop = 
	{
		TileUp 		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		TileDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		PanLeft 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,", 
		PanRight 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		LeftUp 		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		LeftDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		RightUp		= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		RightDown 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		
		ZoomWide 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		ZoomTele 	= "0xA6, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		FocusNear	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		FocusFar 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		IrisSmall 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
		IrisLarge 	= "0xA6, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,",
	},
}

-- 协议中指定的命令序号,每发一次命令递增一次
local CommandSN	= 0;
Protocol.Checksum = function (s)
	if s[1] == 0xA6 then
		CommandSN = math.mod((CommandSN + 1), 256);
		s[3]  = CommandSN;
		local len = s[4] < 0x80 and 12 or bits.lshift(s[6], 8) + s[7];
		local checkSum = 0;
		for j = 1, len - 1, 1 do
			checkSum = checkSum + s[j];
		end;	
		s[len] = math.mod(checkSum, 256);
	end;
	return s;
end;


Protocol.CamAddrProcess = function(s, addr)
	local addr = math.mod(addr, 256);
	if s[1] == 0xA6 then
		s[Protocol.CommandAttr.AddrPos] = addr;
	end;
	return s;
end;

Protocol.SetTourProcess = function(s, tour, preset)
	if s[1] == 0xA6 and tour >= 1 then
		s[6] = tour - 1;
		s[7] = bits.rshift(bits.band(preset, 0xFF00), 8);
		s[8] = bits.band(preset, 0xFF);
	end;
	return s;
end;

Protocol.TourProcess = function(s, tour)
	if s[1] == 0xA6 and tour >= 1 then
		s[6] = tour - 1;
	end;
	return s;	
end;

Protocol.PatternProcess = function(s, num)
	if s[1] == 0xA6 and num >= 1 then
		s[6] = num - 1;
	end;
	return s;	
end;

Protocol.PositionProcess = function(s, hor, ver, zoom)
	-- 下面只处理快速定位功能
	--扩大10倍表示，最大值1000*10
	local max_pos_zoom = 10000;	
	local cur_pos_zoom=0;
	if s[1] == 0xA6 then
		s[6] = bits.rshift(bits.band(hor, 0xFF00), 8);
		s[7] = bits.band(hor, 0xFF);
		s[8] = bits.rshift(bits.band(ver, 0xFF00), 8);
		s[9] = bits.band(ver, 0xFF);
		if zoom == 0 then
			cur_pos_zoom = 0;
		else 
			if math.abs(zoom) > max_pos_zoom then
				cur_pos_zoom = max_pos_zoom; 
			else 
				cur_pos_zoom = math.abs(zoom);
			end;			
			cur_pos_zoom = zoom > 0 and cur_pos_zoom or 0x8000 + cur_pos_zoom;
		end
		s[10] = bits.rshift(bits.band(cur_pos_zoom, 0xFF00), 8);
		s[11] = bits.band(cur_pos_zoom, 0xFF);
		Protocol.Checksum(s);
		return s;
	end;	
end;

--[[
云台持续移动
arg1:水平速度
arg2：垂直速度
arg3：ZOOM速度
T：超时时间
--]]

Protocol.ContinueStartProcess = function(s, arg1, arg2, arg3, T)
	--下面只处理持续移动功能		
	if s[1] == 0xA6 then
		local mask = 0;	
		if(arg1 ~= 0) then
			mask = arg1 > 0 and mask + 0x30 or mask + 0x20;
		end
		if(arg2 ~= 0) then
			mask = arg2 > 0 and mask + 0x08 or mask + 0x0C;
		end
		if(arg3 ~= 0) then
			mask = arg3 > 0 and mask + 0x02 or mask + 0x03;
		end	

		s[6]	= mask;
		s[7]	= bits.rshift(bits.band(math.abs(arg1), 0xFF00), 8);
		s[8]	= bits.band(math.abs(arg1), 0xFF);
		s[9]	= bits.rshift(bits.band(math.abs(arg2), 0xFF00), 8);
		s[10]	= bits.band(math.abs(arg2), 0xFF);
		s[11]	= bits.band(math.abs(arg3), 0xFF);
		Protocol.Checksum(s);
		return s;
	end;	
end;

--[[
云台绝对移动
arg1:水平速度+水平坐标
arg2：垂直速度+垂直坐标
arg3：ZOOM速度+ZOOM坐标
--]]
Protocol.AbsoluteStartProcess = function(s,arg1, arg2, arg3)
	--下面只处理绝对移动功能
	if s[1] == 0xA6 then
		s[8]  = bits.rshift(bits.band(arg1, 0xFF00), 8);
		s[9]  = bits.band(arg1, 0xFF);
		s[10] = bits.rshift(bits.band(arg2, 0xFF00), 8);
		s[11] = bits.band(arg2, 0xFF);
		s[12] = bits.rshift(bits.band(arg3, 0xFF00), 8);
		s[13] = bits.band(arg3, 0xFF);	
		s[14] = 0xFF;
		s[15] = 0xFF;
		s[16] = 0x08;
		s[17] = 0x00;
		return s;
	end;
end;


--[[
云台绝对移动
arg1:水平坐标
arg2：垂直坐标
arg3：ZOOM坐标
--]]

Protocol.PositionAbsProcess = function(s,arg1, arg2, arg3, T)
	--下面只处理绝对移动功能
	if s[1] == 0xA6 then
		s[8]  = bits.rshift(bits.band(arg1, 0xFF00), 8);
		s[9]  = bits.band(arg1, 0xFF);
		s[10] = bits.rshift(bits.band(arg2, 0xFF00), 8);
		s[11] = bits.band(arg2, 0xFF);
		s[12] = bits.rshift(bits.band(arg3, 0xFF00), 8);
		s[13] = bits.band(arg3, 0xFF);	
		return s;
	end;
end;

--[[
设置线扫左边界
--]]
Protocol.SetLeftLimitProcess = function(s,arg1)
	if arg1 == nil then
		arg1 = 0;
	end;
	if s[1] == 0xA6 then
		s[6] = bits.band(arg1, 0xFF);
		return s;
	end;
end;

--[[
设置线扫右边界
--]]
Protocol.SetRightLimitProcess = function(s,arg1)
	if arg1 == nil then
		arg1 = 0;
	end;
	if s[1] == 0xA6 then
		s[6] = bits.band(arg1, 0xFF);
		return s;
	end;
end;

--[[
开始自动线扫
--]]
Protocol.AutoScanOnProcess = function(s,arg1)
	if arg1 == nil then
		arg1 = 0;
	end;
	if s[1] == 0xA6 then
		s[6] = bits.band(arg1, 0xFF);
		return s;
	end;
end;

--[[
云台停止移动
style:停止类型，1、停止水平/垂直 2、停止Zoom 3、停止水平/垂直/ZOOM
--]]
Protocol.StopProcess = function(s, arg1)
	--下面只处理云台停止移动功能（包括持续移动和绝对移动停止）
	if s[1] == 0xA6 then
		s[4] = 0x01;
		s[5] = 0x00;
		s[6] = 0x00;
		Protocol.Checksum(s);
		return s;
	end;
end;



--[[
下面的函数是可选的，除非有特殊处理过程才打开，没有的话，千万不要打开，否则会造成解析出错
Protocol.MonAddrProcess = function(s, addr)
	return s;
end;
--]]

Protocol.SpeedProcess = function(s, arg1, arg2)
		s[7]  = bits.rshift(bits.band(arg2, 0xFF00), 8);
		s[8]  = bits.band(arg2, 0xFF);
		s[9]  = bits.rshift(bits.band(arg1, 0xFF00), 8);
		s[10] = bits.band(arg1, 0xFF);
	return s;
end;



Protocol.PresetProcess = function(s, arg)
--删除预置点指令作特殊处理，添加和调用预置点命令正常处理
	if s[1] == 0xA6 then
		s[6] = bits.rshift(bits.band(math.abs(arg), 0xFF00), 8);
		s[7] = bits.band(math.abs(arg), 0xFF);
		return s;
	end;	
end;


return Protocol;