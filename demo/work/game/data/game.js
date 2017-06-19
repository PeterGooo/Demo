  // 路径
  var Path = "./data/imgs/";

  /*    ***********              使用须知       ***************         */
 
  /* 更新功能： dataGame新增了 卡牌类，H5小游戏类的数据包
  	**			默认isUse是 false， 不会再页面上显示。
  	**			如果使用，请更改isUse属性值为true，再新增相关游戏
  */
  /*新增游戏步骤： 
  	* 1. 复制模块 (下面 六 行)
  		,
    	{
    		name: "",
    		src: "",
    		imgUrl: Path + ""
    	}
    * 2. 添加数据
    * 3. 在./data/imgs/目录下放相应的icon。
   */

  // 更多游戏  json数据包
  var dataGame = {
  	// 麻将的数据
  	mj: [
  		{
  			isUse: true
  		},
  		{
    		name: "熊猫四川1",
    		src: "#",
    		imgUrl: Path + "icon-neimeng.png"
    	},
    	{
    		name: "熊猫四川2",
    		src: "#",
    		imgUrl: Path + "icon-neimeng.png"
    	},
    	{
    		name: "熊猫四川3",
    		src: "#",
    		imgUrl: Path + "icon-neimeng.png"
    	},
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }
,
      {
        name: "熊猫四川3",
        src: "#",
        imgUrl: Path + "icon-neimeng.png"
      }

    ],
    
  	// 卡牌的数据
    kp:[
    	{
  			isUse: false
  		}
    ],

    // 小游戏的数据
    xyx:[
    	{
  			isUse: false
  		}
    ]
  };



/*   ***************    地址栏判断  **********       */
  // 浏览器地址输入网址判断  （功能已经实现)
  // js会获取地址栏的url，提取查询值。 没有查询值会有默认HTML标签上的值
  // 此页面设置的格式是：http ... XXX.html?from=val    val值是推荐游戏name，如果使用，请保持值 统一
  
  // 详情请看README.md
  /*
  // val值 如果是 fanjin   即对应地址栏查询值， ?from=fanjin
  val: {
        name: '翻金麻将',
        size: '33.04MB',
        //imgUrl  icon图片地址
        imgUrl: Path + '',

        // 下载链接
        downUrl: '',
        
        三张轮播图的图片地址和点击图片的url
        picList: [{
            imgSrc: Path + '',
            downUrl: ''
        }, {
            imgSrc: Path + '',
            downUrl: ''
        }, {
            imgSrc: Path + '',
            downUrl: ''
        }]
    },
  */

  // data数据包
  var data = {
    //  模板示例。   如果使用查询功能，请复制改代码并正确填写内容   记得修改属性  string
    
    string: {
        name: '',
        size: '',
        imgUrl: '',
        downUrl: '',
        picList: [{
            picSrc: '',
            picUrl: ''
        }, {
            picSrc: '',
            picUrl: ''
        }, {
            picSrc: '',
            picUrl: ''
        }]
    }
};
