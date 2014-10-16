/**
*2048简单复刻版
*Date:2014.3.24
*Author:chenrenyi
*/

#include<stdio.h>
#include<stdlib.h>
#include<time.h>

//交换两个数
void swap(int* a,int* b){
    int m = *a;
    *a = *b;
    *b = m;
}

//产生随机数
int createRand(){
    int result = rand()%4+1;
    return result;
}

         
//生成随机数填充
void rand(int array[][5]){
    int k=1;
    int j=1;
    while(array[k=createRand()][j=createRand()] != 0);
    array[k][j] = rand()%3>1 ? 2 : 1;
}

//输出数组
void printNum(int num[][5]){
    for(int i = 1;i < 5; i++){
        for(int k =1; k < 5;k++){
            printf("%d",num[i][k]);
        }
        printf("\n");
    }
}

//判断输赢.1,胜利；-1；失败；0继续进行
int isWon(int num[][5]){
    int flag=1;
    for(int row =1;row < 5;row++){
        for(int column = 1;column < 5;column++){
            if(num[row][column] == 0){
                flag=0;
            }else if(num[row][column] == 11){    //2048
                return 1; //胜利
            }
        }
    }
    return flag;
}

//左移
void left(int num[][5]){
    for(int row = 1 ;row < 5; row++){
        for(int column = 1; column < 5; column++){
             //如果当前数为0,整体缩进到当前数不为0
             int count = 0;
             while(num[row][column] == 0 && count<4){
                 for(int k=column;k<4;k++){
                      swap(&num[row][k],&num[row][k+1]);
                 }
                 count++;
             }
             //如果下一个数为0,整体缩进到下一个数不为0
             count=0;
             while(num[row][column+1] == 0 && count<3){
                 for(int k=column+1;k<4;k++){
                      swap(&num[row][k],&num[row][k+1]);
                 }
                 count++;
             }
         
             //当前数与下一个数相等，合并
             if(num[row][column] == num[row][column+1]){
                  num[row][column] *= 2;
                  num[row][column+1] = 0;
             }
        }    
    }
}

//右移
void right(int num[][5]){
    for(int row = 1;row < 5;row++){
        for(int column = 4; column > 0; column--){
            //如果当前数为0,整体缩进到当前数不为0
            int count = 0;
            while(num[row][column] == 0 && count < 4){
                 for(int k=column;k>1;k--){
                      swap(&num[row][k],&num[row][k-1]);
                 }
                 count++;
            }
            //如果下一个数为0,整体缩进到下一个数不为0
            count = 0;
            while(num[row][column-1] == 0 && count < 4){
                 for(int k=column-1;k>1;k--){
                      swap(&num[row][k],&num[row][k-1]);
                 }
                 count++;
             }
             
             //当前数与下一个数相等，合并;不等则继续循环
             if(num[row][column] == num[row][column-1]){
                  num[row][column] *= 2;
                  num[row][column-1] = 0;
             }
        } 
    }
    
}

//上移
void up(int num[][5]){
    for(int column =1;column < 5;column++){
        for(int row=1;row < 5;row++){
            //如果当前数为0,整体缩进到当前数不为0
            int count=0;
            while(num[row][column] == 0 && count < 4){
                for(int k=row;k < 4;k++){
                     swap(&num[k][column],&num[k+1][column]);
                }
                count++;
            }
            //如果下一个数为0,整体缩进到下一个数不为0
            count = 0;
            while(num[row+1][column] == 0 && count < 3){
                for(int k=row+1;k < 4;k++){
                    swap(&num[k][column],&num[k+1][column]);
                }
                count++;
            }
            //如果当前数与下一个数相等，合并；不等则继续循环
            if(num[row][column] == num[row+1][column]){
                num[row][column] *= 2;
                num[row+1][column] = 0;
            }
        }
    }
}

//下移
void down(int num[][5]){
    for(int column =1;column < 5;column++){
        for(int row=4;row > 0;row--){
            //如果当前数为0,整体缩进到当前数不为0
            int count=0;
            while(num[row][column] == 0 && count < 4){
                for(int k=row;k > 1;k--){
                     swap(&num[k][column],&num[k-1][column]);
                }
                count++;
            }
            //如果下一个数为0,整体缩进到下一个数不为0
            count = 0;
            while(num[row-1][column] == 0 && count < 3){
                for(int k=row-1;k > 1;k--){
                    swap(&num[k][column],&num[k-1][column]);
                }
                count++;
            }
            //如果当前数与下一个数相等，合并；不等则继续循环
            if(num[row][column] == num[row-1][column]){
                num[row][column] *= 2;
                num[row-1][column] = 0;
            }
        }
    }    
}



//主方法
int main(){
	int num[5][5]={0};
    srand( (unsigned)time( NULL ) ); 
    rand(num);

    for(int k=0;k<8;k++){
        right(num);
        printNum(num);
        printf("----\n");
        rand(num);
        printNum(num);
        printf("\n");
    }
    return 0;
}