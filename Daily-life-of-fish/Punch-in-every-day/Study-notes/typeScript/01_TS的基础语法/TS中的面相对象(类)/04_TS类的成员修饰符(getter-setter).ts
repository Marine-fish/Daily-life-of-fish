/**
 * 在修饰符为private时,这个属性在外面就不能进行操作了
 * 如果想要操作就要用 setter和getter方法
 */

class Movement {
    name: string
   private _time: string

   constructor(name: string, time: string) {
    this.name = name
    this.time = time
   }

   set time(newValue: string) {

   }

   
   get time() : string {
    return this._time
   }
   
}

const ShotPut = new Movement("铅球", "0")
ShotPut.time = "2"
